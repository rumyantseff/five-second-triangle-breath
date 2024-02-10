<template>
    <v-container fluid>
        <v-card class="rounded-xl elevation-0">
            <v-row class="my-auto justify-center">
                <v-col cols="12" lg="12" sm="2" class="d-flex justify-center">
                    <h4 class="inhale primaryFont--text text-center">{{ $t('triangle.inhale') }}</h4>
                    <h4 class="exhale primaryFont--text text-center">{{ $t('triangle.exhale') }}</h4>
                    <h4 class="breath-hold primaryFont--text text-center">{{ $t('triangle.breathHold') }}</h4>
                    <v-img src="/images/triangle.svg" class="triangle" />                   
                    <div :class="isActive ? 'circle-active' : 'circle'"></div>
                </v-col>
            </v-row>
            <v-row class="transparent justify-center">
                <v-col lg="12" sm="2" class="mt-16 d-flex justify-center">
                    <v-card-actions>
                        <v-btn class="reset-button pa-6" rounded depressed dark @click="isActive = !isActive">
                            <v-icon>{{ !isActive ? 'mdi-play' : 'mdi-stop' }}</v-icon>
                            <v-card-text class="font-weight-bold">{{ !isActive ? $t('triangle.startAnimation') : $t('triangle.stopAnimation') }}</v-card-text>
                        </v-btn> 
                        <v-spacer></v-spacer>
                    </v-card-actions>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: 'IndexLayout',
    data() {
        return {
            isActive: false,
        }
    },
}
</script>

<style>
.triangle {
    filter: drop-shadow(15px 15px 15px #325184);
    display: inline-block;
    position: relative;
}
.circle {
    display: block;
    border-radius: 50%;
    background: radial-gradient(circle at 65% 15%, white 1px, #4065b2 3%, #d9dcfb 60%, #bcbde7 100%);
    opacity: 0.85;
    filter: drop-shadow(5px 5px 15px #4065b2);
    position: absolute;
}
.circle-active {
    display: block;
    border-radius: 50%;
    background: radial-gradient(circle at 65% 15%, white 1px, #4065b2 3%, #d9dcfb 60%, #bcbde7 100%);
    opacity: 0.85;
    filter: drop-shadow(5px 5px 15px #4065b2);
    animation: spin 5s infinite linear, circle-moving 15s ease-in infinite;
    transition: all 5s ease;
    position: absolute;
}
.reset-button {
    background-image: linear-gradient(135deg, #325184 0%, #4065b2 100%);
    box-shadow: 0 10px 30px -6px #4065b2;
}
.inhale {
    position: absolute; 
    transform: rotate(-60deg);
    width: 200px;
}
.exhale {
    position: absolute; 
    transform: rotate(60deg);
    width: 200px;
}
.breath-hold {
    position: absolute;
    width: 200px;
}
/* Spinning the sphere using key frames */
@keyframes spin {
    from { 
        transform: rotate(0deg); 
    }
    to {         
        transform: rotate(360deg); 
    }
}

/* Mobiles */
@media only screen and (max-width: 600px) {
    .triangle {
        max-height: 250px !important;
        max-width: 250px !important;
        margin-top: 50px;
    }
    .circle {
        width: 35px;
        height: 35px;
        margin-top: 260px;
        margin-right: 240px;
    }
    .circle-active {
        width: 35px;
        height: 35px;
        margin-top: 260px;
        margin-right: 240px;
    }
    .inhale {
        margin-top: 150px; 
        margin-right: 180px; 
    }
    .exhale {
        margin-top: 150px; 
        margin-left: 180px; 
    }
    .breath-hold {
        margin-top: 300px; 
        width: 200px;
    }
    @keyframes circle-moving {
        0% {
            transform: translate(0, 0);
        }
        33.33% {
            transform: translate(120px, -220px);
        }
        66.667% {
            transform: translate(240px, 0);
        }
        100% {
            transform: translate(0, 0);
        }
    }
}
/* Tablets anf Laptops */
@media only screen and (min-width: 600px) {
    .triangle {
        max-height: 400px !important;
        max-width: 400px !important;
        margin-top: 100px;
    }
    .circle {
        width: 50px;
        height: 50px;
        margin-top: 435px;
        margin-right: 380px;
    }
    .circle-active {
        width: 50px;
        height: 50px;
        margin-top: 435px;
        margin-right: 380px;
    }
    .inhale {
        margin-top: 230px; 
        margin-right: 250px; 
        width: 200px;
    }
    .exhale {
        margin-top: 230px; 
        margin-left: 250px; 
        width: 200px;
    }
    .breath-hold {
        margin-top: 500px; 
        width: 200px;
    }
    @keyframes circle-moving {
        0% {
            transform: translate(0, 0);
        }
        33.33% {
            transform: translate(190px, -345px);
        }
        66.667% {
            transform: translate(375px, 0);
        }
        100% {
            transform: translate(0, 0);
        }
    }
}
</style>