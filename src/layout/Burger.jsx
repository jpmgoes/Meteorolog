function activeMenu(open) {
  const mobileMenu = document.querySelector(".mobile-menu");
  mobileMenu.style.transition = "all 0.3s";
  setTimeout(() => {
    if (!open) {
      mobileMenu.style.width = `5vw`;
      mobileMenu.style.opacity = `0`;
    } else {
      mobileMenu.style.width = `60vw`;
      mobileMenu.style.opacity = `1`;
    }
  }, 0);
}

function burgerAnimation(open) {
  const b1 = document.querySelector(".burger__1");
  const b2 = document.querySelector(".burger__2");
  const b3 = document.querySelector(".burger__3");
  b1.style.transition = "all 0.3s";
  b2.style.transition = "all 0.3s";
  b3.style.transition = "all 0.3s";
  b1.transformOrigin = "0";
  b3.transformOrigin = "0";
  setTimeout(() => {
    if (open) {
      b1.style.transform = `rotate(38deg)`;
      b3.style.transform = `rotate(-38deg)`;
      b2.style.opacity = `0`;
    } else {
      b1.style.transform = `rotate(0deg)`;
      b3.style.transform = `rotate(0deg)`;
      b2.style.opacity = `1`;
    }
  }, 2);
}

export const Burger = ({ open, setOpen }) => {
  return (
    <div
      className="burger"
      onClick={() => {
        setOpen(!open);
        burgerAnimation(open);
        activeMenu(open);
      }}
    >
      <div className="burger__1"></div>
      <div className="burger__2"></div>
      <div className="burger__3"></div>
    </div>
  );
};
