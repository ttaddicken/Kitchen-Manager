app.service('DishService', function(){
    //how do constructors work???
    
    
    
    var dishes = [{
        id: 1,
        title: 'DoubleTree Chocolate Chip Cookies',
        prepTime: 15,
        cookTime: 15,
        servings: 36,
        img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT2kmGP1e0c57YOML9iu5G2xy6vlcTB3q7jDnN0C66QdnJ-x8y8JQ',
        ingredients: ['3 cups all-purpose flour', '3⁄4 cup rolled oats', '3⁄4 teaspoon baking soda', '1 teaspoon salt', '1⁄4 teaspoon ground cinnamon', '1 1⁄2 cups butter', '1 1⁄2 cups sugar', '3⁄4 cup packed brown sugar', '4 eggs', '2 1⁄2 teaspoons vanilla extract', '1 teaspoon lemon juice', '3 cups semi-sweet chocolate chips', '1⁄2 cups chopped walnuts'],
        instructions:'Preheat oven to 350*F (175*C). In a medium bowl, combine flour, oats, baking soda, salt and cinnamon. Set aside.  With an electric mixer, cream butter in large bowl.  Add both sugars and beat on medium for 2 minutes.  Add eggs one at a time, beating well after each addition.  Add lemon juice and vanilla; mix well.  Stir in flour mixture, mixing well.  Add chocolate chips and nuts and stir to just combine.  Drop by 1/4 cupfuls on non-stick baking pans, 2 to 3 inches apart.  Bake for 13 to 15 minutes or until lightly browned around the edges.  Cool; transfer to  wire racks and cool completely.  Store in tightly sealed container.',        
        nutritionInfo: [{Calories:310,Sodium:'200 mg',TotalFat:'18 g',Potassium:'0 mg',Saturated:'8 g',TotalCarbs:'33 g',Polyunsaturated:'0 g',DietaryFiber:'2 g',Monounsaturated:'0 g',Sugars:'22 g',Trans:'0 g',Protein:'4 g',Cholesterol:'35 mg'}],
        vitamins:[{A:'6%',Calcium:'2%',C:'0%',Iron:'6%'}],
        stars: 5,
        },{
        id: 2,
        title: 'Citrus Baked Salmon',
        prepTime: 10,
        cookTime: 12,
        img: 'http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2008/4/23/0/RB0106_Citrus-Baked-Salmon.jpg.rend.sni12col.landscape.jpeg',
        ingredients: ['8 slices fresh lemon','8 slices fresh orange','4 (6 to 8-ounce) skinless salmon fillets','Sea salt and freshly ground black pepper','4 tbs freshly chopped dill','4 tbs sun-dried tomatoes in oil','plus 1 tablespoon oil from jar','2 cups white wine'
        ],
        instructions:'Preheat the oven to 375 degrees F.  In a large 9 by 13 shallow baking dish place 1 lemon slice with 1 orange slice side by side so you\'ll end up with 4 groups. Each salmon fillet will have its own bed of citrus. Season each fillet with salt and pepper then place each salmon fillet over the 2 slices of lemon and orange. In a small bowl mix the dill, sun-dried tomatoes and tomato oil. Divide mixture on top of the salmon fillet, then drizzle with the wine. Place the baking dish in the oven and cook for 8 to 10 minutes or longer for well done.
        nutritionInfo: [{Calories:'',Sodium:'',TotalFat:'',Potassium:'',Saturated:'',TotalCarbs:'',Polyunsaturated:'',DietaryFiber:'',Monounsaturated:'',Sugars:'',Trans:'',Protein:'',Cholesterol:''}],
        vitamins:[{A:'',Calcium:'',C:'',Iron:''}],
        stars: 4,
        }]



    this.getDishes = function(){
        return dishes;
    }
	
    this.getDish = function(title){

        for (var i = 0; i < dishes.length; i++) {
            var currentDish = dishes[i];
            if(currentDish.title.toLowerCase() === title.toLowerCase()){
                return currentDish;
            }
        }
    }
                
})