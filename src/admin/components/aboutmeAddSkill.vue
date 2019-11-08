<template lang="pug">
    
      form.skills-form.skills-form--newskill(@submit.prevent = 'newSkill') 
        input( placeholder="Новый навык" v-model = "skill.title" required).new-skill
        input( type="number" max = "100" placeholder="%" required v-model ="skill.percent").skill-value
        button(type="submit").button.button--big 
</template>

<script>
import {mapState} from 'vuex';
import {mapMutations} from 'vuex';
import $axios from "../requests";




export default {
    
    props: {id:""},
    data(){
        return{

        skill:
        {
        title: "",
        percent: '',
        category: this.id
        },
        
    computed:
    {
        ...mapState(
            {
                compts: state => state.skills
                }
            )
        },
    }
    },
    methods:{
        newSkill(){
            $axios.post(
                '/skills', this.skill)
                .then(
                    response => {
                        this.skill = response.data, this.addSkill(
                            this.skill),
                             this.skill = {
                                 title: '', percent: ''
                                 }
                                 }
                                 )
                                 },

        ...mapMutations(['addSkill'])
    },


    updated(){
        this.skill.category = this.id
        }
}
</script>