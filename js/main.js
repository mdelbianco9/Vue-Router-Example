

/*
	What does vue-router allow us to do?
	What new vue-specific HTML element do we use to create a “link” using vue-router?
	What new vue-specific HTML element do we use to display new content via a vue-router route?
	What new vue-specific HTML element do we use to trigger transition animations?
	What is the syntax for initiating a Vue-Router instance?
	What is the syntax for mounting a Vue-Router instance to your Vue instance?
	What new property do we add to our Vue instance in order to enable using Vue-Router?
	In our components, what is the name of the property in which we store our HTML markup which will be output to our HTML document?
*/

// What does vue-router allow us to do? 
		// It allows us the chnge the contet on the page without having to reload the page (notice the relode icon in your browser when you click the links), this allows for smooth transtions between content and pages on a website.




const services = {
	template: `<section>
		<h1>Welcome to Vue Services Page</h1>
		<i class="fas fa-wrench fa-5x"></i>
		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
		</p>
	</section>`
}

const jobs = {
	template: `<section>
		<h1>Welcome to Vue Jobs Page</h1>
		<i class="fas fa-users fa-5x"></i>
		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
		</p>
	</section>`
}

const router = new VueRouter({
	routes: [
		{
			path: '/services',
			component: services
		},
		{
			path: '/jobs',
			component: jobs
		},
	]
})



var routeTest = new Vue({
	router,
	el: '#app',
	data: {
		
	},

	methods: {

	}
}).$mount('#app')