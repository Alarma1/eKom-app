<template>
    <div class="text-center">
        <h1 class="text-3xl font-bold mb-4">Аналитика</h1>
        <h2 class="text-2xl font-bold mb-4">Аналитика по визитам</h2>
    </div>
    <div class="h-[500px] flex justify-center" ref="chartDiv"></div>
</template>

<script setup>
    import {useStore} from 'vuex';
    import {useRouter} from "vue-router";
    import {shallowRef, onMounted} from 'vue';
    import * as am5 from '@amcharts/amcharts5';
    import * as am5xy from '@amcharts/amcharts5/xy';
    import am5themes_Animated from '@amcharts/amcharts5/themes/Animated.js';
    import am5locales_ru_RU from "@amcharts/amcharts5/locales/ru_RU.js";

    const store = useStore()
    const router = useRouter();
    const localStorageKey = localStorage.getItem
    if (localStorageKey === null || localStorageKey === undefined || localStorageKey === '' || localStorageKey !== '5f8475902b0be670555f1bb3') {
        router.push('/')
    }
    const paramsGraphic = store.state.dataGraphic.map((item) => {
        return {date: Date.parse(item.date), visits: item.visits}
    })

    const chartDiv = shallowRef(null);
    onMounted(() => {
        let root = am5.Root.new(chartDiv.value);
        root.locale = am5locales_ru_RU;
        const myTheme = am5.Theme.new(root);

        myTheme.rule("AxisLabel", ["minor"]).setAll({
            dy: 1
        });

        myTheme.rule("Grid", ["minor"]).setAll({
            strokeOpacity: 0.08
        });

        root.setThemes([
            am5themes_Animated.new(root),
            myTheme
        ]);

        let chart = root.container.children.push(am5xy.XYChart.new(root, {
            panX: false,
            panY: false,
            wheelX: "panX",
            wheelY: "zoomX",
            paddingLeft: 0
        }));

        let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
            behavior: "zoomX"
        }));
        cursor.lineY.set("visible", false);

        let xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
            maxDeviation: 0,
            baseInterval: {
                timeUnit: "day",
                count: 1
            },
            renderer: am5xy.AxisRendererX.new(root, {
                minorGridEnabled: true,
                minGridDistance: 200,
                minorLabelsEnabled: true
            }),
            tooltip: am5.Tooltip.new(root, {})
        }));

        xAxis.set("minorDateFormats", {
            day: "dd",
            month: "MM"
        });

        let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
            renderer: am5xy.AxisRendererY.new(root, {})
        }));

        let series = chart.series.push(am5xy.LineSeries.new(root, {
            name: "Series",
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "visits",
            valueXField: "date",
            tooltip: am5.Tooltip.new(root, {
                labelText: "Визитов: {valueY} Дата: {valueX.formatDate('dd.MM.YYYY')}"
            })
        }));

        series.bullets.push(function () {
            let bulletCircle = am5.Circle.new(root, {
                radius: 5,
                fill: series.get("fill")
            });
            return am5.Bullet.new(root, {
                sprite: bulletCircle
            })
        })

        chart.set("scrollbarX", am5.Scrollbar.new(root, {
            orientation: "horizontal"
        }));

        series.data.setAll(paramsGraphic);
    });
</script>

<style>
</style>
