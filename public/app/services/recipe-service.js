app.service('StatesService', function(){
    //how do constructors work???
    
    
    
    var recipes = [{
        id: 1,
        title: 'DoubleTree Chocolate Chip Cookies',
        prepTime: 15,
        cookTime: 15,
        servings: 36,
        img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT2kmGP1e0c57YOML9iu5G2xy6vlcTB3q7jDnN0C66QdnJ-x8y8JQ',
        ingredients: [3 cups all-purpose flour,3⁄4 cup rolled oats,3⁄4 teaspoon baking soda,1 teaspoon salt,1⁄4 teaspoon ground cinnamon,1 1⁄2 cups butter,1 1⁄2 cups sugar,3⁄4 cup packed brown sugar,4 eggs,2 1⁄2 teaspoons vanilla extract,1 teaspoon lemon juice,3 cups semi-sweet chocolate chips,1⁄2 cups chopped walnuts],
        instructions:'Preheat oven to 350*F (175*C). In a medium bowl, combine flour, oats, baking soda, salt and cinnamon. Set aside.  With an electric mixer, cream butter in large bowl.  Add both sugars and beat on medium for 2 minutes.  Add eggs one at a time, beating well after each addition.  Add lemon juice and vanilla; mix well.  Stir in flour mixture, mixing well.  Add chocolate chips and nuts and stir to just combine.  Drop by 1/4 cupfuls on non-stick baking pans, 2 to 3 inches apart.  Bake for 13 to 15 minutes or until lightly browned around the edges.  Cool; transfer to  wire racks and cool completely.  Store in tightly sealed container.',        
        nutritionInfo: [Calories:310,Sodium:200 mg,TotalFat:18 g,Potassium:0 mg,Saturated:8 g,TotalCarbs:33 g,Polyunsaturated:0 g,DietaryFiber:2 g,Monounsaturated:0 g,Sugars:22 g,Trans:0 g,Protein:4 g,Cholesterol:35 mg],
        Vitamins:[A:6%,Calcium:2%,C:0%,Iron:6%],
        stars: 5,
        },{
        id: 2,
        title: 'DoubleTree Chocolate Chip Cookies',
        prepTime: 20,
        cookTime: 10,
        img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT2kmGP1e0c57YOML9iu5G2xy6vlcTB3q7jDnN0C66QdnJ-x8y8JQ',
        ingredients: [3 cups all-purpose flour,3⁄4 cup rolled oats,3⁄4 teaspoon baking soda,1 teaspoon salt,1⁄4 teaspoon ground cinnamon,1 1⁄2 cups butter,1 1⁄2 cups sugar,3⁄4 cup packed brown sugar,4 eggs,2 1⁄2 teaspoons vanilla extract,1 teaspoon lemon juice,3 cups semi-sweet chocolate chips,1⁄2 cups chopped walnuts],
        instructions:'Preheat oven to 350*F (175*C). In a medium bowl, combine flour, oats, baking soda, salt and cinnamon. Set aside.  With an electric mixer, cream butter in large bowl.  Add both sugars and beat on medium for 2 minutes.  Add eggs one at a time, beating well after each addition.  Add lemon juice and vanilla; mix well.  Stir in flour mixture, mixing well.  Add chocolate chips and nuts and stir to just combine.  Drop by 1/4 cupfuls on non-stick baking pans, 2 to 3 inches apart.  Bake for 13 to 15 minutes or until lightly browned around the edges.  Cool; transfer to  wire racks and cool completely.  Store in tightly sealed container.',        
        nutritionInfo: "",
        stars: 5,    
        }
        }]



    this.getRecipes = function(){
        return recipes;
    }
	
    this.getRecipe = function(title){

        for (var i = 0; i < recipes.length; i++) {
            var currentRecipe = recipes[i];
            if(currentRecipe.title.toLowerCase() === title.toLowerCase()){
                return currentRecipe;
            }
        }
    }
                
})