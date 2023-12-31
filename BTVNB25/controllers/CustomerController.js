const Customer = require("../models/Customer");
const moment = require("moment");
const { Op } = require("sequelize");
const { getPaginateUrl } = require("../utils/url");
const Province = require("../models/Province");
const { validationResult } = require("express-validator");
const validate = require("../utils/validate");
var md5 = require("md5");
module.exports = {
  index: async (req, res) => {
    const { keyword, status } = req.query;
    const { PER_PAGE } = process.env;

    const customer = await Customer;
    const filters = {};
    if (status === "active" || status === "inactive") {
      filters.status = status === "active" ? 1 : 0;
    }

    if (keyword) {
      filters[Op.or] = [
        {
          name: {
            [Op.like]: `%${keyword}%`,
          },
        },
        {
          email: {
            [Op.like]: `%${keyword}%`,
          },
        },
      ];
    }
    //Tổng số bản ghi
    const totalCountObj = await customer.findAndCountAll({
      where: filters,
    });

    const totalCount = totalCountObj.count;

    //Tổng số trang
    const totalPage = Math.ceil(totalCount / PER_PAGE);

    //Trang hiện tại
    let { page } = req.query;
    if (!page || page < 1 || page > totalPage) {
      page = 1;
    }

    //Tính offset
    const offset = (page - 1) * PER_PAGE;
    const msg = req.flash("msg");
    const msgDelete = req.flash("msgDelete");
    const customers = await customer.findAll({
      // attributes: ["id", "name", "email", "status"],
      order: [["id", "DESC"]],
      where: filters,
      limit: +PER_PAGE,
      offset: offset,
    });

    res.render("customers/index", {
      customers,
      moment,
      totalPage,
      page,
      req,
      getPaginateUrl,
      msg,
      msgDelete,
    });
  },
  create: async (req, res) => {
    const province = await Province;
    const provinceList = await province.findAll();
    const msg = req.flash("msg");
    const errors = req.flash("errors");

    res.render("customers/create", { provinceList, msg, errors, validate });
  },
  store: async (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    if (errors.isEmpty()) {
      const customer = await Customer;
      req.body.password = md5(req.body.password);
      req.body.province = +req.body.province;
      customer.create(req.body);

      req.flash("msg", "Thêm mới thành công");
      res.redirect("/customers");
    } else {
      req.flash("errors", errors.array());
      req.flash("msg", "Vui lòng nhập đầy đủ thông tin");
      res.redirect("/customers/create");
    }
  },
  edit: async (req, res) => {
    const customers = await Customer;
    const customer = await customers.findOne({ where: { id: req.params.id } });
    const msgEdit = req.flash("msgEdit");
    const msg = req.flash("msg");
    const errors = req.flash("errors");
    const emailIdentical = req.flash("emailIdentical");
    const err = req.flash("err");
    res.render("customers/edit", {
      customer,
      msgEdit,
      msg,
      errors,
      validate,
      emailIdentical,
      err,
    });
  },
  handleEdit: async (req, res) => {
    const errors = validationResult(req);
    const customers = await Customer;
    const customer = await customers.findOne({ where: { id: req.params.id } });
    const customerIdentical = await customers.findOne({
      where: { email: req.body.email },
    });
    if (customerIdentical && customerIdentical.email !== customer.email) {
      req.flash("emailIdentical", "Email đã tồn tại");
      req.flash("err", "Vui lòng nhập đầy đủ thông tin");
      res.redirect(`/customers/edit/${req.params.id}`);
    } else {
      if (errors.isEmpty()) {
        const customer = await Customer;
        const customerEdit = await customer.update(
          {
            name: req.body.name,
            email: req.body.email,
            status: req.body.status,
          },
          {
            where: {
              id: +req.params.id,
            },
          }
        );
        req.flash("msgEdit", "Sửa thành công");
        res.redirect(`/customers/edit/${req.params.id}`);
      } else {
        req.flash("errors", errors.array());
        req.flash("msg", "Vui lòng nhập đầy đủ thông tin");
        res.redirect(`/customers/edit/${req.params.id}`);
      }
    }
  },
  delete: async (req, res) => {
    const customer = await Customer;
    const customerDelete = await customer.destroy({
      where: {
        id: +req.params.id,
      },
    });
    req.flash("msgDelete", "Xóa thành công");
    res.redirect("/customers");
  },
};
