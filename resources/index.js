new Vue({
    el: "#app",
    data: {
        subMenuKey: null,
        navbarMenu:{
            mainMenu: [
                "New & Featured",
                "Men",
                "Women",
                "Kids",
                "Sales",
                "SNKRS"
            ],
            newFeatured: {
                "NewFeatured":[
                    "New Arrival",
                    "Latest Shoes",
                    "Latest Clothing",
                    "SNKRS Launch Calendar",
                    "Get 'Em in SNKRS",
                    "Customize With Nike By You",
                    "Nike App Exclusive",
                    "Best Sellers",
                    "Member Exclusive",
                    "Top Kick Under 8000.00"
                ],
                "Shop Icons": [
                    "Air Force 1",
                    "Air Jordan 1",
                    "Air Max 1",
                    "Dunk",
                    "Blazer",
                    "Pegasus"
                ],
                "New For Men": [
                    "Shoes",
                    "Clothing",
                    "Accessories",
                    "Shop All New"
                ],
                "New For Women": [
                    "Shoes",
                    "Clothing",
                    "Accessories",
                    "Shop All New"
                ],
                "New For Kids": [
                    "Shoes",
                    "Clothing",
                    "Accessories",
                    "Shop All New"
                ]
            }
        },
        promotions:{
            "Hello Nike App": "Download the app to access everything Nike. Get Your Great",
            "New Styles on Sale: Up to 40% Off": "Shop All Our New Markdowns",
            "Free Delivery":"Applies to orders of ₹ 14 000.00 or more. View details"
        },
        products:{
            1:{
                img:"https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_594,c_limit/11767feb-4b06-4e17-939d-efccaa311212/court-vision-low-shoes-Fh1wdP.png",
                name: "Nike Court Vision Low",
                carg: "Men's Shoes",
                price: "₹ 5 695.00"
            }
        },
    },

    mounted(){
        const promotionList = document.getElementById("promotionList");
        const promotions = ["Hello Nike App Download the app to access everything Nike. Get Your Great", "New Styles on Sale: Up to 40% Off Shop All Our New Markdowns", "Free Delivery Applies to orders of ₹ 14 000.00 or more. View details"];
        let currentPromotion = 0;

        setInterval(() => {
            currentPromotion = (currentPromotion + 1) % promotions.length;
            promotionList.style.animation = "none";
            promotionList.offsetHeight; /* trigger reflow */
            promotionList.style.animation = "slideLeft 10s linear infinite";
            promotionList.querySelector("li").innerText = promotions[currentPromotion];
        }, 10000);
    },

    computed: {
        myDataKeys() {
          return Object.keys(this.navbarMenu.newFeatured)
        },
        myPromotionKeys() {
            return Object.keys(this.promotions)
        }
    },


});