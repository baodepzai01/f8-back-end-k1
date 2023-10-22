const deleteActionList = document.querySelectorAll(".delete-action");
if (deleteActionList) {
  deleteActionList.forEach((deleteAction) => {
    deleteAction.addEventListener("click", (e) => {
      e.preventDefault();
      if (confirm("Bạn có chắc chắn muốn xóa?")) {
        const form = e.target.nextElementSibling;
        form.submit();
      }
    });
  });
}
