const apiKey = 'BtPyJfeefV9NlLpJDRM1ScW9AUkNWKE7r1qjfTk83sWd1tseS67UzTqxp3dosicqrZoMSZ4hGZly0n6_SRty7SmJgJfA8k8-J4xHY-BBsQZzkAv3XFpsFmleSvzOYHYx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
    } ).then(jsonResponse => {
        if (jsonResponse.business) {
            return jsonResponse.business.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }));
            }       
    });
}
};

export default Yelp;