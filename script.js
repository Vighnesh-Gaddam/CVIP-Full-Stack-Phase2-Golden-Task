async function generateShortUrl() {
    const longUrl = document.getElementById("longUrl").value;
    const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`);
    if (response.ok) {
        const shortUrl = await response.text();
        document.getElementById("shortUrlResult").innerHTML = `<p>Short URL: <a href="${shortUrl}" target="_blank">${shortUrl}</a></p>`;
    } else {
        document.getElementById("shortUrlResult").innerHTML = "<p>Error creating Short URL</p>";
    }
}
