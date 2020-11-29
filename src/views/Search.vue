<template>
	<div class="profile col-md-6 offset-md-3">
		<form @submit.prevent="getUser" class="form-row">
			<input type="text" class="form-control" v-model="search" placeholder="Type here..">
			<button type="submit" class="btn btn-primary">Search</button>
		</form>

		<div class="row">
			<div class="card col-md-4 mt-2" v-for="(user, i) in users" :key="i">
				<img :src="user.avatar_url" class="card-img-top" alt="">
				<div class="card-body">
					<h5 class="card-title">{{ user.login }}</h5>
					<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a :href="user.html_url" target="_blank" class="btn btn-primary">Github</a>
				</div>
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
				users: [],
				search: '',
			}
		},
		methods: {
			getUser() {
				if (this.search != '') {
					axios.get('https://api.github.com/search/users?q='+this.search)
					.then(response => {
						console.log(response.data.items);
						this.users = response.data.items;
					})
				}
				else {
					alert('Type something');
				}
			}
		}
	}
</script>