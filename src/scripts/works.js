import Vue from 'vue'

const tag = {
    template: '#tag',
    props: ["tag"]


}
const work = {
    template: '#work',

    props: ["work", "index", "iindex", ],
    methods: {
        selectPreview: function() {
            let i = this.index;
            this.$emit('clickemmited', i);
            console.log(this.iindex)
        }
    },
}

new Vue({
    el: '#jobs',

    components: {
        tag,
        work,



    },
    data: () => ({
        works: [],
        currentIndex: 0,












    }),



    methods: {
        buttonDown: function(e) { if (this.currentIndex < this.works.length - 1) { this.currentIndex++, console.log(this.currentIndex) } },
        buttonUp: function(e) { if (this.currentIndex > 0) { this.currentIndex--, console.log(this.currentIndex) } },

        addImagePaths(works) {
            return works.map(el => {
                let picture = require(`../images/content/works/${el.picture}`);
                el.picture = picture
                return el
            })
        },
        previewSelect(i) { this.currentIndex = i },




    },




    created() {
        const data = require("../jsons/works.json");
        this.works = this.addImagePaths(data)
    }

})