//task 2 store amenities checked
document.addEventListener('DOMContentLoaded', () => {
    let checkboxes = document.querySelectorAll(".each_amenity");
    let amenitiesChecked_list = [];

    document.addEventListener("change", function() {
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                amenitiesChecked_list += checkbox.getAttribute("data-name") + ", ";
            }
        });
        document.getElementById("amenities_selected").innerText = amenitiesChecked_list;
    });
    
    //task 3 = status api
    let api_header = document.getElementById('api_status'); 
    const urlRequest = 'http://0.0.0.0:5001/api/v1/status/';
    fetch(urlRequest).then(response => {
        api_header.classList.add('available');
    })
    .catch(err=>{
        api_header.classList.remove('available');
    });

    //task 4 = store places and add section places to html
    //este punto no esta terminado

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(update),
    };

    fetch('http://0.0.0.0:5001/api/v1/places_search/', options)
    .then(data => {
        if (!data.ok) {
          throw Error(data.status);
         }
        return data.json();
        }).then(update => {
        console.log(update);
        }).catch(e => {
        console.log(e);
        });
});
