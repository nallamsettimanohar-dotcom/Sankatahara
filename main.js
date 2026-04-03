document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let query = document.getElementById("searchInput").value;

    // Add filter to show only videos (no shorts/playlists)
    let searchURL = "https://www.youtube.com/results?search_query="
                    + encodeURIComponent(query)
                    + "&sp=EgIQAQ%253D%253D";

    window.location.href = searchURL;
});
