<template>
	<div class="intro-header p2">
		<div>
		<div class="mx-auto"><img src="./assets/fb-homepage-flag.png"></div>
		
		<div class="et-display-3 et-text-center">
				ExoTypography
		</div> 
		<div class="et-text-center">
<router-link to="/about" class="et-button-text">About</router-link>
<router-link to="/elements" class="et-button-text">Elements</router-link>
</div>
		</div>	
		
	</div>
</template>

<style lang="stylus">
/*  Require ET Styles Framework */
 @import "../et/variables"

/*  End of ET Styles Framework */


#awrap{
max-width: 740px;
margin-left: auto;
margin-right: auto;
}
.intro-header{
display: flex;
  align-items: center; 
  min-height: 100vh;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0;
  margin: auto;

  background: color-primary}

  @element '.intro-header' \a\n\d (min-width: 960px) {
  .intro-header {
    background: white;
    
  }
}


      
</style>