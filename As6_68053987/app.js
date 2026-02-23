
  function orderNow() {
    alert("ไปที่หน้าสั่งจองสินค้า");
  }

  function contactUs() {
    alert("ไปที่หน้าติดต่อเรา");
  }

  function viewMenu() {
    alert("กำลังเปิดหน้าเมนูทั้งหมด");
  }

  function aboutUs() {
    alert("แสดงข้อมูลเกี่ยวกับร้าน");
  }

  document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href'))
        .scrollIntoView({ behavior: 'smooth' });
    });
  });
