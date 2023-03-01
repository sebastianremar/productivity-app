//  TO:DO fix this function to show only tab that has been clicked
function showContent(contentId) {
    // Hide all content divs
    let contents = document.getElementsByClassName("sidebar-menu");
    for (let i = 0; i < contents.length; i++) {
      contents[i].style.display = "none";
    }
    
    // Show the selected content div
    let selectedContent = document.getElementById(contentId);
    selectedContent.style.display = "block";
}