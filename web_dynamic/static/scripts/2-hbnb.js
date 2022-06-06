document.addEventListener('DOMContentLoaded', () => {
    let checkboxes = document.querySelectorAll(".each_amenity");
    let amenitiesChecked_list = [];

    document.addEventListener("click", function() {
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                amenitiesChecked_list += checkbox.getAttribute("data-name") + ", ";
            }
        });
        document.getElementById("amenities_selected").innerText = amenitiesChecked_list;
    });
    
    let api_header = document.getElementById('api_status'); 
    const urlRequest = 'http://0.0.0.0:5001/api/v1/status/';
    fetch(urlRequest).then(response => {
        api_header.classList.add('available');
    })
    .catch(err=>{
        api_header.classList.remove('available');
    });
});
