<template>
    <v-container class="pa-16" fluid>
        <v-card class="rounded-xl elevation-0">
            <v-row class="my-auto justify-center">
                <v-col cols="12" lg="12" sm="2" class="d-flex justify-center">
                    <h5 class="inhale primary--text text-center">{{ $t('triangle.inhale') }}</h5>
                    <h5 class="exhale primary--text text-center">{{ $t('triangle.exhale') }}</h5>
                    <h5 class="breath-hold primary--text text-center">{{ $t('triangle.breathHold') }}</h5>
                    <v-img src="/images/triangle.png" class="triangle" />                   
                    <div :class="isActive ? 'circle-active' : 'circle'"></div>
                </v-col>
            </v-row>
            <v-row class="mt-16 justify-center" no-gutters>
                <v-col lg="12" sm="2" class="d-flex justify-center">
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
    filter: drop-shadow(15px 15px 15px #746c7c);
    display: inline-block;
    position: relative;
}
.circle {
    display: block;
    border-radius: 50%;
    background: radial-gradient(circle at 65% 15%, white 1px, #7289ab 3%, #c1dced 60%, #7289ab 100%);
    opacity: 0.75;
    filter: drop-shadow(5px 5px 15px #7289ab);
    position: absolute;
}
.circle-active {
    display: block;
    border-radius: 50%;
    background: radial-gradient(circle at 65% 15%, white 1px, #7289ab 3%, #c1dced 60%, #7289ab 100%);
    opacity: 0.75;
    filter: drop-shadow(5px 5px 15px #7289ab);
    animation: spin 5s infinite linear, circle-moving 15s ease-in infinite;
    transition: all 5s ease;
    position: absolute;
}
.reset-button {
    background-image: linear-gradient(135deg, #7289ab 0%, #a0c0de 100%);
    box-shadow: 0 20px 30px -6px #a0c0de;
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
            transform: translate(120px, -230px);
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
        margin-top: 440px;
        margin-right: 390px;
    }
    .circle-active {
        width: 50px;
        height: 50px;
        margin-top: 440px;
        margin-right: 390px;
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
            transform: translate(195px, -365px);
        }
        66.667% {
            transform: translate(390px, 0);
        }
        100% {
            transform: translate(0, 0);
        }
    }
}
</style>