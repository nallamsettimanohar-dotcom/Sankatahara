document.getElementById("searchForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let query = document.getElementById("searchInput").value;

    let url = "https://www.youtube.com/results?search_query="
              + encodeURIComponent(query)
              + "&sp=EgIQAQ%253D%253D"; // filters only videos

    window.location.href = url;
});
