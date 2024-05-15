window.addEventListener("DOMContentLoaded", () => {
  const write = document.getElementById("rewrite");
  write.addEventListener("keyup", (e) => {
    console.log(e)
    const value1 = e.target.value
    document.getElementById("rewrite1").innerHTML = value1;
  });
});
