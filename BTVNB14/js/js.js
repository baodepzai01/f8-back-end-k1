const form = document.getElementById("activation-form");
const otpResult = document.getElementById("otp-result");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const phoneInput = form.phone.value;

  try {
    const response = await fetch("http://42.96.41.29:880/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: phoneInput,
        otp: [],
      }),
    });

    if (response.ok) {
      const result = await response.json();
      otpResult.textContent = `Số điện thoại ${phoneInput} đã được active.\nMã OTP đã được cập nhật.`;
    } else {
      otpResult.textContent = "Có lỗi xảy ra khi kích hoạt số điện thoại.";
    }
  } catch (error) {
    otpResult.textContent = "Có lỗi xảy ra khi kết nối tới API.";
  }
});
