
let photoDir = '../images/';

let imageList = [
	{"name": "orendao_beast.jpg",
	"filter": "orendao",
	"id": "22" },

	{"name": "orendao_man.png",
	"filter": "orendao",
	"id": "23" },

	{"name": "orendao_nature.jpg",
	"filter": "orendao",
	"id": "24" },

	{"name": "monument.jpg",
	"filter": "last-website-remastered",
	"id": "21" },

	{"name": "aw_01.jpg",
	"filter": "andrew-wells",
	"id": "1" },

	{"name": "aw_03.jpg",
	"filter": "andrew-wells",
	"id": "2" },

	{"name": "aw_13.jpg",
	"filter": "andrew-wells",
	"id": "3" },

	{"name": "aw_artifact.jpg",
	"filter": "andrew-wells",
	"id": "4" },

	{"name": "aw_bone-bird.jpg",
	"filter": "andrew-wells",
	"id": "5" },

	{"name": "aw_compass.jpg",
	"filter": "andrew-wells",
	"id": "6" },

	{"name": "aw_construct.jpg",
	"filter": "andrew-wells",
	"id": "7" },

	{"name": "aw_cover.jpg",
	"filter": "andrew-wells",
	"id": "8" },

	{"name": "aw_dragon.jpg",
	"filter": "andrew-wells",
	"id": "9" },

	{"name": "aw_ship.jpg",
	"filter": "andrew-wells",
	"id": "10" },

	{"name": "aw_wheel.jpg",
	"filter": "andrew-wells",
	"id": "11" },

	{"name": "aw_wing.jpg",
	"filter": "andrew-wells",
	"id": "12" },

	{"name": "r_alibii-recovered.jpg",
	"filter": "resolutiion",
	"id": "12" },

	{"name": "r_cover.jpg",
	"filter": "resolutiion",
	"id": "12" },

	{"name": "r_valor-5.png",
	"filter": "resolutiion",
	"id": "12" },

	{"name": "r_valor-action-pose.png",
	"filter": "resolutiion",
	"id": "12" },

	{"name": "misc_screenshot_28.png",
	"filter": "miscellaneous",
	"id": "13" },

	{"name": "misc_asmodeus-celestial-lenses_01.jpg",
	"filter": "miscellaneous",
	"id": "13" },

	{"name": "misc_asmodeus-celestial-lenses_02.jpg",
	"filter": "miscellaneous",
	"id": "13" },

	{"name": "misc_ateneum.jpg",
	"filter": "miscellaneous",
	"id": "13" },

	{"name": "misc_clipping_01.png",
	"filter": "miscellaneous",
	"id": "14" },

	{"name": "misc_corstavia.jpg",
	"filter": "miscellaneous",
	"id": "15" },

	{"name": "misc_kursian-bridge.jpg",
	"filter": "miscellaneous",
	"id": "16" },

	{"name": "misc_union.jpg",
	"filter": "miscellaneous",
	"id": "18" },

	{"name": "misc_valokaari.jpg",
	"filter": "miscellaneous",
	"id": "19" },

	{"name": "misc_vestischen.jpg",
	"filter": "miscellaneous",
	"id": "20" }
];

document.addEventListener("DOMContentLoaded", function() {

	let app = new Vue({
		el: '#app',
		data() {
			return {
				thumbnailDir: photoDir,
				images: imageList,
				galleryFilter: 'all'
			}
		},
		methods: {
			showLightbox: function(imageName) {
				this.$refs.lightbox.show(imageName);
			},
			updateFilter(filterName) {
				this.galleryFilter = filterName;
			}
		},
		computed: {
			filteredImages: function() {
				if (this.galleryFilter === 'all') {
					return this.images;
				} else {
					return this.images.filter(image => image.filter === this.galleryFilter);
				}
			}
		}
	})

	app.use(Lightbox);
})