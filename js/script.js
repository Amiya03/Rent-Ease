// Sample Properties Data
const properties = [
    { location: "Mangal Bhawan", price: "Rs.1400/month", description: "Near GM university",Image:"Images\property1.jpeg" },
    { location: "Meher chamber", price: "Rs.1500/month", description: "Close to Reliance mart" ,Image:"C:Images\property2.png"},
    { location: "Arjya samaj", price: "1500/month", description: "Near Vanik",Image:"C:Imagges\property3.png" }
];

// Populate Property Listings
function populateProperties() {
    const propertyList = document.getElementById("property-list");
    propertyList.innerHTML = "";
    properties.forEach(property => {
        const div = document.createElement("div");
        div.className = "property";
        div.innerHTML = `
            <h3>${property.location}</h3>
            <p>${property.price}</p>
            <p>${property.description}</p>
        `;
        propertyList.appendChild(div);
    });
}

// Search Functionality
function searchProperties() {
    const query = document.getElementById("search").value.toLowerCase();
    const filteredProperties = properties.filter(property => 
        property.location.toLowerCase().includes(query) || 
        property.price.toLowerCase().includes(query) || 
        property.description.toLowerCase().includes(query)
    );

    const propertyList = document.getElementById("property-list");
    propertyList.innerHTML = "";
    filteredProperties.forEach(property => {
        const div = document.createElement("div");
        div.className = "property";
        div.innerHTML = `
            <h3>${property.location}</h3>
            <p>${property.price}</p>
            <p>${property.description}</p>
        `;
        propertyList.appendChild(div);
    });
}

// Initialize on Load
document.addEventListener("DOMContentLoaded", populateProperties);
