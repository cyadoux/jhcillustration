
let photoDir = '../images/';

let imageList = [
	{"name": "orendao_beast.jpg",
	"filter": "orendao",
	"id": "1" },

	{"name": "orendao_man.png",
	"filter": "orendao",
	"id": "2" },

	{"name": "orendao_nature.jpg",
	"filter": "orendao",
	"id": "3" },

	{"name": "monument.jpg",
	"filter": "last-website-remastered",
	"id": "4" },

	{"name": "aw_01.jpg",
	"filter": "andrew-wells",
	"id": "5" },

	{"name": "aw_03.jpg",
	"filter": "andrew-wells",
	"id": "6" },

	{"name": "aw_13.jpg",
	"filter": "andrew-wells",
	"id": "7" },

	{"name": "aw_artifact.jpg",
	"filter": "andrew-wells",
	"id": "8" },

	{"name": "aw_bone-bird.jpg",
	"filter": "andrew-wells",
	"id": "9" },

	{"name": "aw_compass.jpg",
	"filter": "andrew-wells",
	"id": "10" },

	{"name": "aw_construct.jpg",
	"filter": "andrew-wells",
	"id": "11" },

	{"name": "aw_cover.jpg",
	"filter": "andrew-wells",
	"id": "12" },

	{"name": "aw_dragon.jpg",
	"filter": "andrew-wells",
	"id": "13" },

	{"name": "aw_ship.jpg",
	"filter": "andrew-wells",
	"id": "14" },

	{"name": "aw_wheel.jpg",
	"filter": "andrew-wells",
	"id": "15" },

	{"name": "aw_wing.jpg",
	"filter": "andrew-wells",
	"id": "16" },

	{"name": "r_alibii-recovered.jpg",
	"filter": "resolutiion",
	"id": "17" },

	{"name": "r_cover.jpg",
	"filter": "resolutiion",
	"id": "18" },

	{"name": "r_valor-5.png",
	"filter": "resolutiion",
	"id": "19" },

	{"name": "r_valor-action-pose.png",
	"filter": "resolutiion",
	"id": "20" },

	{"name": "misc_screenshot_28.png",
	"filter": "miscellaneous",
	"id": "21" },

	{"name": "misc_asmodeus-celestial-lenses_01.jpg",
	"filter": "miscellaneous",
	"id": "22" },

	{"name": "misc_asmodeus-celestial-lenses_02.jpg",
	"filter": "miscellaneous",
	"id": "23" },

	{"name": "misc_ateneum.jpg",
	"filter": "miscellaneous",
	"id": "24" },

	{"name": "misc_clipping_01.png",
	"filter": "miscellaneous",
	"id": "25" },

	{"name": "misc_corstavia.jpg",
	"filter": "miscellaneous",
	"id": "26" },

	{"name": "misc_kursian-bridge.jpg",
	"filter": "miscellaneous",
	"id": "27" },

	{"name": "misc_union.jpg",
	"filter": "miscellaneous",
	"id": "28" },

	{"name": "misc_valokaari.jpg",
	"filter": "miscellaneous",
	"id": "29" },

	{"name": "misc_vestischen.jpg",
	"filter": "miscellaneous",
	"id": "30" }
];

document.addEventListener("DOMContentLoaded", function() {
	Vue.use(Lightbox);

	new Vue({
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
	});
});
