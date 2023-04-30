new Vue({
    el: "#app",  
    data: {
        view: "homePage",
        subMenuKey: null,
        selectedSize:null,
        addToCartButton:true,
        bill:[],
        productsInCart: [],
        quantityOfSelectedProduct: 1,
        enlargeImg: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/164b0ac6-7e73-4138-883c-1db81177787b/court-vision-low-shoes-Fh1wdP.png",
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
            },
            2:{
                img:"https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_594,c_limit/b438b74f-386c-40fe-b9de-e2297f6104d4/court-vision-low-shoes-5RDlNK.png",
                name: "Nike Court Vision Low",
                catg: "Women's Shoes",
                price: "₹ 5 695.00"
            },
            3:{
                img:"https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_594,c_limit/a5acfc22-bbb0-4630-ba26-a6593d45ebc5/jordan-1-mid-younger-shoes-FKKgKz.png",
                name:"Jordan-1-mid",
                catg: "Younger Kids' Shoes",
                price: "₹ 5 995.00"
            },
            4:{
                img:"https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_594,c_limit/ac871484-8738-44cf-abbd-4d347ad536e9/revolution-6-flyease-easy-on-off-road-running-shoes-XvR99K.png",
                name:"Nike Revolution 6 FlyEase",
                catg:"Men's Easy On/Off Road Running Shoes",
                price: "₹ 3 695.00"
            },
            5:{
                img:"https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_594,c_limit/889d7ede-9a1a-4127-9aae-450a84a355ea/legend-essential-3-next-nature-training-shoes-sJBRlm.png",
                name:"Nike Legend Essential 3 Next Nature",
                catg:"Women's Training Shoes",
                price: "₹ 4 995.00"                
            },
            6:{
                img:"https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_594,c_limit/81183b86-63a5-47b0-bc6b-cf54b456a858/nikecourt-legacy-older-shoes-dBCJpZ.png",
                name:"NikeCourt Legacy",
                catg:"Older Kids' Shoes",
                price: "₹ 3 495.00" 
            }
        },
        productDetails: {
			1: {
			  img: [
				"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/164b0ac6-7e73-4138-883c-1db81177787b/court-vision-low-shoes-Fh1wdP.png",
				"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5aaa9d3c-1976-4be6-b831-97d4cd1c79c4/court-vision-low-shoes-Fh1wdP.png",
				"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/fca79dca-489c-413d-b9a3-be788f543002/court-vision-low-shoes-Fh1wdP.png",
				"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ee2f861c-13b8-47d8-9f5d-357fcb86e7a5/court-vision-low-shoes-Fh1wdP.png",
				"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3d332f0e-613c-438b-9e11-c9002064a42b/court-vision-low-shoes-Fh1wdP.png",
				"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f37079d8-6d4d-4f04-ad27-2695af62d00e/court-vision-low-shoes-Fh1wdP.png",
				"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bd693fc5-d0a5-45e8-969a-f3938c827b69/court-vision-low-shoes-Fh1wdP.png",
				"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e3614dee-8d2a-4a18-a9bf-4340a718e4ee/court-vision-low-shoes-Fh1wdP.png"
			  ],
              name:"Nike Court Vision Low",
              catg:"Men's Shoes",
              price:"₹ 5 695.00",
              rupees: 5695,
              sizes:["UK 6 (EU 40)","UK 6.5","UK 7","UK 7.5","UK 8","UK 8.5","UK 9","UK 9.5","UK 10","UK 10.5","UK 11","UK 11.5"]
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
        },
    },

    methods:{
        addToCart(size) {
            const selectedSize = this.selectedSize;
            const quantity = this.quantityOfSelectedProduct;
            const product = { ...this.productDetails[1] }; 
            product.selectedSize = selectedSize;
            product.quantity = quantity;
            this.productsInCart.push(product);
            this.addToCartButton = false;
          },          

        incrementQuantity() {
            if(this.quantityOfSelectedProduct < 10){
                this.quantityOfSelectedProduct++;
            }
          },
        decrementQuantity() {
        if (this.quantityOfSelectedProduct > 1) {
            this.quantityOfSelectedProduct--;
        }
        },
        billCalculations() {
            let subtotal = 0;
            let handlingFees = 750;
            for (let i = 0; i < this.productsInCart.length; i++) {
              const product = this.productsInCart[i];
              subtotal += product.rupees * product.quantity;
            }
            if (subtotal > 13999) {
              handlingFees = 0;
            }
            const total = subtotal + handlingFees;
            this.bill.push(subtotal, handlingFees, total);
            this.view = "showCart";
            this.scrollToTop();
        },
        showPopup(){            
            document.getElementById("popup").style.display = "block";
        },

        hidePopup() {
            document.getElementById("popup").style.display = "none";
        },

        scrollToTop() {
            window.scrollTo(0, 0);
            console.log("QWERTYUIOP");
        }
          
    }


});