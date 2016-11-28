<template>
	<div class="intro-header p2">
		<div>
		<div class="et-display-4 et-white-text"><center>&#9780;</center></div>
		
		<div class="et-display-3">
					ExoTypography
		</div> 
		<div>
<router-link to="/about">About</router-link>
<router-link to="/earth">Earth</router-link>
<router-link to="/fire">Fire</router-link>
<router-link to="/water">Water</router-link>
<router-link to="/air">Air</router-link>
<router-link to="/aether">Aether</router-link>
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
    background: bright-black;
    color: off-white;
  }
}


      
</style>