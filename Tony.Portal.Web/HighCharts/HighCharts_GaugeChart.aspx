<%@ Page Language="C#" MasterPageFile="~/Top.Master" AutoEventWireup="true" CodeBehind="HighCharts_GaugeChart.aspx.cs" Inherits="Tony.Portal.Web.HighCharts.HighCharts_GaugeChart" %>

<asp:Content ID="Content1" ContentPlaceHolderID="headcontent" runat="server">
    <title>HighChart_仪表图</title>
    <link rel="icon" href="https://static.jianshukeji.com/highcharts/images/favicon.ico" />
    <script src="https://img.hcharts.cn/highcharts/highcharts.js"></script>
    <script src="https://img.hcharts.cn/highcharts/highcharts-more.js"></script>
    <script src="https://img.hcharts.cn/highcharts/modules/exporting.js"></script>
    <script src="https://img.hcharts.cn/highcharts-plugins/highcharts-zh_CN.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="mainpage" runat="server">
    <div class="uk-height-1-1">
        <div class="uk-width-large-9-10 uk-width-medium-9-10 uk-width-small-1-1 uk-container-center">
            <div id="tony_block_article" class="uk-panel">
                <div class="uk-flex uk-flex-column">
                    <div id="gauge_speedometer" class="uk-panel uk-panel-box uk-margin-bottom"></div>
                    <div id="gauge_dual" class="uk-panel uk-panel-box uk-margin-bottom"></div>
                </div>
            </div>
        </div>
    </div>
    <script src="/Js/highcharts/gaugecharts.js"></script>
</asp:Content>
