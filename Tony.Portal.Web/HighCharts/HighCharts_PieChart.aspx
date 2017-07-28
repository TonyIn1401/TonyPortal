<%@ Page Language="C#" MasterPageFile="~/Top.Master" AutoEventWireup="true" CodeBehind="HighCharts_PieChart.aspx.cs" Inherits="Tony.Portal.Web.HighCharts.HighCharts_PieChart" %>

<asp:Content ID="Content1" ContentPlaceHolderID="headcontent" runat="server">
    <title>HighChart_饼状图</title>
    <link rel="icon" href="https://static.jianshukeji.com/highcharts/images/favicon.ico" />
    <script src="https://img.hcharts.cn/highcharts/highcharts.js"></script>
    <script src="https://img.hcharts.cn/highcharts/modules/exporting.js"></script>
    <script src="https://img.hcharts.cn/highcharts-plugins/highcharts-zh_CN.js"></script>
    <script src="https://img.hcharts.cn/highcharts/modules/data.js"></script>
	<script src="https://img.hcharts.cn/highcharts/modules/drilldown.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="mainpage" runat="server">
    <div class="uk-height-1-1">
        <pre id="tsv" style="display: none">
            Browser Version	Total Market Share
            Microsoft Internet Explorer 8.0	26.61%
            Microsoft Internet Explorer 9.0	16.96%
            Chrome 18.0	8.01%
            Chrome 19.0	7.73%
            Firefox 12	6.72%
            Microsoft Internet Explorer 6.0	6.40%
            Firefox 11	4.72%
            Microsoft Internet Explorer 7.0	3.55%
            Safari 5.1	3.53%
            Firefox 13	2.16%
            Firefox 3.6	1.87%
            Opera 11.x	1.30%
            Chrome 17.0	1.13%
            Firefox 10	0.90%
            Safari 5.0	0.85%
            Firefox 9.0	0.65%
            Firefox 8.0	0.55%
            Firefox 4.0	0.50%
            Chrome 16.0	0.45%
            Firefox 3.0	0.36%
            Firefox 3.5	0.36%
            Firefox 6.0	0.32%
            Firefox 5.0	0.31%
            Firefox 7.0	0.29%
            Proprietary or Undetectable	0.29%
            Chrome 18.0 - Maxthon Edition	0.26%
            Chrome 14.0	0.25%
            Chrome 20.0	0.24%
            Chrome 15.0	0.18%
            Chrome 12.0	0.16%
            Opera 12.x	0.15%
            Safari 4.0	0.14%
            Chrome 13.0	0.13%
            Safari 4.1	0.12%
            Chrome 11.0	0.10%
            Firefox 14	0.10%
            Firefox 2.0	0.09%
            Chrome 10.0	0.09%
            Opera 10.x	0.09%
            Microsoft Internet Explorer 8.0 - Tencent Traveler Edition	0.09%
        </pre>
        <div class="uk-width-large-9-10 uk-width-medium-9-10 uk-width-small-1-1 uk-container-center">
            <div id="tony_block_article" class="uk-panel">
                <div class="uk-flex uk-flex-column">
                    <div id="pie_basic" class="uk-panel uk-panel-box uk-margin-bottom"></div>
                    <div id="pie_donut" class="uk-panel uk-panel-box uk-margin-bottom"></div>
                    <div id="pie_donut_center_title" class="uk-panel uk-panel-box uk-margin-bottom"></div>
                    <div id="pie_drilldown" class="uk-panel uk-panel-box uk-margin-bottom"></div>
                    <div id="pie_legend" class="uk-panel uk-panel-box uk-margin-bottom"></div>
                </div>
            </div>
        </div>
    </div>
    <script src="/Js/highcharts/piecharts.js"></script>
</asp:Content>
