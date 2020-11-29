<template>
	<div class="profile col-md-6 offset-md-3">
		<form @submit.prevent="getUser">
			<input type="text" class="form-control" v-model="username" placeholder="">
			<button type="submit" class="btn btn-primary">Submit</button>
		</form>

		<div class="card" style="width: 18rem;">
			<img :src="image" class="card-img-top" alt="">
			<div class="card-body">
				<h5 class="card-title">{{ name }}</h5>
				<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				<a :href="html_url" target="_blank" class="btn btn-primary">Github</a>
			</div>
		</div>

	</div>
</template>

<script>
	import axios from 'axios'
	import 'bootstrap/dist/css/bootstrap.min.css'

	export default {
		data() {
			return {
				username: '',
				name: '',
				image: '',
				html_url: ''
			}
		},
		methods: {
			getUser() {
				axios.get('https://api.github.com/users/'+this.username)
				.then(response => {
					console.log(response.data);
					this.name = response.data.name;
					this.image = response.data.avatar_url;
					this.html_url = response.data.html_url;
				}),
				this.username = '';
			}
		}
	}
</script>