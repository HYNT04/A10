function setCookie(name, value, days) {
    const date = new Date();

    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));

    const expires = "expires=" + date.toUTCString();

    document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/;SameSite=Lax";
}

function getCookie(name) {
    const cookieName = name + "=";
    const cookies = document.cookie.split(";");

    for (let cookie of cookies) {
        cookie = cookie.trim();

        if (cookie.indexOf(cookieName) === 0) {
            return decodeURIComponent(cookie.substring(cookieName.length));
        }
    }

    return "";
}

function showCookie() {
    let savedValue = getCookie("visitorEntry");

    if (savedValue === "") {
        const entry = prompt("Enter a value to save in a cookie:");

        if (entry !== null && entry.trim() !== "") {
            setCookie("visitorEntry", entry.trim(), 7);

            savedValue = entry.trim();

            document.getElementById("cookie-message").textContent =
                "Cookie saved. Your entry is: " + savedValue;
        } else {
            document.getElementById("cookie-message").textContent =
                "No cookie was saved. Reload the page to try again.";
        }
    } else {
        document.getElementById("cookie-message").textContent =
            "Your saved cookie value is: " + savedValue;
    }
}

document.addEventListener("DOMContentLoaded", function () {

    showCookie();

    document.getElementById("change-cookie").addEventListener("click", function () {

        const entry = prompt("Enter a new value for your cookie:");

        if (entry !== null && entry.trim() !== "") {
            setCookie("visitorEntry", entry.trim(), 7);

            document.getElementById("cookie-message").textContent =
                "Your saved cookie value is: " + entry.trim();
        }
    });

});