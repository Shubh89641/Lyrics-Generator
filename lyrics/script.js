document.getElementById('generate-btn').addEventListener('click', function() {
    var artist = document.getElementById('artist').value;
    var song = document.getElementById('song').value;

    fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
        .then(response => response.json())
        .then(data => {
            if (data.lyrics) {
                document.getElementById('lyrics').textContent = data.lyrics;
            } else {
                document.getElementById('lyrics').textContent = "Lyrics not found.";
            }
        })
        .catch(error => {
            console.log(error);
            document.getElementById('lyrics').textContent = "Failed to fetch lyrics. Please try again later.";
        });
});
