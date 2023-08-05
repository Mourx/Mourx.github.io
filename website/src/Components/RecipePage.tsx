import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { RecipeCard } from "./Recipes/RecipeCard";

export function RecipePage() {
  useEffect(() => {
    document.title = "Recipes";
  }, []);
  return (
    <Box>
      <Typography variant="h1">Recipes</Typography>
      <Grid container>
        <Grid
          item
          xs={12}
          display="grid"
          sx={{ gridTemplateColumns: { md: "1fr 1fr 1fr 1fr 1fr 1fr" } }}
        >
          <RecipeCard
            recipeName="Aubergine Meatballs"
            previewimg="/recipeThumbnails/AubergineMeatballs.jpg"
            url="/Recipes/AubergineMeatballs"
          ></RecipeCard>
          <RecipeCard
            recipeName="Black Bean Burgers"
            previewimg="/recipeThumbnails/BlackBeanBurgers.jpg"
            url="/Recipes/BlackBeanBurgers"
          ></RecipeCard>
          <RecipeCard
            recipeName="Butternut Squash Pasta"
            previewimg="/recipeThumbnails/ButternutSquashPasta.jpg"
            url="/Recipes/ButternutSquashPasta"
          ></RecipeCard>
          <RecipeCard
            recipeName="Creamy Mushroom Pasta"
            previewimg="/recipeThumbnails/CreamyMushroomPasta.jpg"
            url="/Recipes/CreamyMushroomPasta"
          ></RecipeCard>
          <RecipeCard
            recipeName="Double Bean And Roasted Pepper Chilli"
            previewimg="/recipeThumbnails/DoubleBeanAndRoastedPepperChilli.jpg"
            url="/Recipes/DoubleBeanAndRoastedPepperChilli"
          ></RecipeCard>
          <RecipeCard
            recipeName="Dutch Boeren Kool Stamppot"
            previewimg="/recipeThumbnails/DutchBoerenKoolStamppot.jpg"
            url="/Recipes/DutchBoerenKoolStamppot"
          ></RecipeCard>
          <RecipeCard
            recipeName="Falafels"
            previewimg="/recipeThumbnails/Falafels.jpg"
            url="/Recipes/Falafels"
          ></RecipeCard>
          <RecipeCard
            recipeName="GreenRisotto"
            previewimg="/recipeThumbnails/GreenRisotto.jpg"
            url="/Recipes/GreenRisotto"
          ></RecipeCard>
          <RecipeCard
            recipeName="Halloumi Spinach Curry"
            previewimg="/recipeThumbnails/HalloumiSpinachCurry.jpg"
            url="/Recipes/HalloumiSpinachCurry"
          ></RecipeCard>
          <RecipeCard
            recipeName="Harissa Pasta"
            previewimg="/recipeThumbnails/HarissaPasta.jpg"
            url="/Recipes/HarissaPasta"
          ></RecipeCard>
          <RecipeCard
            recipeName="Hearty Lentil Stew"
            previewimg="/recipeThumbnails/HeartyLentilStew.jpg"
            url="/Recipes/HeartyLentilStew"
          ></RecipeCard>
          <RecipeCard
            recipeName="Jewelled Moutzentra"
            previewimg="/recipeThumbnails/JewelledMoutzentra.jpg"
            url="/Recipes/JewelledMoutzentra"
          ></RecipeCard>
          <RecipeCard
            recipeName="Kung Pao Cauliflower"
            previewimg="/recipeThumbnails/KungPaoCauliflower.jpg"
            url="/Recipes/KungPaoCauliflower"
          ></RecipeCard>
          <RecipeCard
            recipeName="Lentil Shepherds Pie"
            previewimg="/recipeThumbnails/LentilShepherdsPie.jpg"
            url="/Recipes/LentilShepherdsPie"
          ></RecipeCard>
          <RecipeCard
            recipeName="Mapu Tofu"
            previewimg="/recipeThumbnails/MapuTofu.jpg"
            url="/Recipes/MapuTofu"
          ></RecipeCard>
          <RecipeCard
            recipeName="Minnestrone Soup"
            previewimg="/recipeThumbnails/MinnestroneSoup.jpg"
            url="/Recipes/MinnestroneSoup"
          ></RecipeCard>
          <RecipeCard
            recipeName="Nam Khao"
            previewimg="/recipeThumbnails/NamKhao.jpg"
            url="/Recipes/NamKhao"
          ></RecipeCard>
          <RecipeCard
            recipeName="Pasta Bake"
            previewimg="/recipeThumbnails/PastaBake.jpg"
            url="/Recipes/PastaBake"
          ></RecipeCard>
          <RecipeCard
            recipeName="Potato Lentil Soup"
            previewimg="/recipeThumbnails/PotatoLentilSoup.jpg"
            url="/Recipes/PotatoLentilSoup"
          ></RecipeCard>
          <RecipeCard
            recipeName="Puff Pastry Vegetable Tart"
            previewimg="/recipeThumbnails/PuffPastryVegetableTart.jpg"
            url="/Recipes/PuffPastryVegetableTart"
          ></RecipeCard>
          <RecipeCard
            recipeName="Quesadillas"
            previewimg="/recipeThumbnails/Quesadillas.jpg"
            url="/Recipes/Quesadillas"
          ></RecipeCard>
          <RecipeCard
            recipeName="Red Kidney Bean Curry"
            previewimg="/recipeThumbnails/RedKidneyBeanCurry.jpg"
            url="/Recipes/RedKidneyBeanCurry"
          ></RecipeCard>
          <RecipeCard
            recipeName="Red Lentil Curry"
            previewimg="/recipeThumbnails/RedLentilCurry.jpg"
            url="/Recipes/RedLentilCurry"
          ></RecipeCard>
          <RecipeCard
            recipeName="Samosas"
            previewimg="/recipeThumbnails/Samosas.jpg"
            url="/Recipes/Samosas"
          ></RecipeCard>
          <RecipeCard
            recipeName="Sausage Potato Kale Soup"
            previewimg="/recipeThumbnails/SausagePotatoKaleSoup.jpg"
            url="/Recipes/SausagePotatoKaleSoup"
          ></RecipeCard>
          <RecipeCard
            recipeName="Spinach Paneer Pulao"
            previewimg="/recipeThumbnails/SpinachPaneerPulao.jpg"
            url="/Recipes/SpinachPaneerPulao"
          ></RecipeCard>
          <RecipeCard
            recipeName="Spring Pilau"
            previewimg="/recipeThumbnails/SpringPilau.jpg"
            url="/Recipes/SpringPilau"
          ></RecipeCard>
          <RecipeCard
            recipeName="Sweet Potato Chilli"
            previewimg="/recipeThumbnails/SweetPotatoChilli.jpg"
            url="/Recipes/SweetPotatoChilli"
          ></RecipeCard>
          <RecipeCard
            recipeName="Sweet Potato Tortilla"
            previewimg="/recipeThumbnails/SweetPotatoTortilla.jpg"
            url="/Recipes/SweetPotatoTortilla"
          ></RecipeCard>
          <RecipeCard
            recipeName="Sweet Tofu"
            previewimg="/recipeThumbnails/SweetTofu.jpg"
            url="/Recipes/SweetTofu"
          ></RecipeCard>
          <RecipeCard
            recipeName="Vegan Kofta"
            previewimg="/recipeThumbnails/VeganKofta.jpg"
            url="/Recipes/VeganKofta"
          ></RecipeCard>
          <RecipeCard
            recipeName="Vegetable Enchiladas"
            previewimg="/recipeThumbnails/VegetableEnchiladas.jpg"
            url="/Recipes/VegetableEnchiladas"
          ></RecipeCard>
          <RecipeCard
            recipeName="Vegetable Jambalaya"
            previewimg="/recipeThumbnails/VegetableJambalaya.jpg"
            url="/Recipes/VegetableJambalaya"
          ></RecipeCard>
          <RecipeCard
            recipeName="Winter Quinoa Salad"
            previewimg="/recipeThumbnails/WinterQuinoaSalad.jpg"
            url="/Recipes/WinterQuinoaSalad"
          ></RecipeCard>
        </Grid>
      </Grid>
    </Box>
  );
}
