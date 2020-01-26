function navigationBar()
{
    var bar = document.getElementById("top-navigation");
    if (bar.className === "header-navigation")
    {
        bar.className += " responsive";
    }
    else
    {
        bar.className = "header-navigation";
    }
}
