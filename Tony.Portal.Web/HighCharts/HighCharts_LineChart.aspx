<%@ Page Language="C#" MasterPageFile="~/Top.Master" AutoEventWireup="true" CodeBehind="HighCharts_LineChart.aspx.cs" Inherits="Tony.Portal.Web.HighCharts.HighCharts_LineChart" %>

<asp:Content ID="Content1" ContentPlaceHolderID="headcontent" runat="server">
    <title>HighChart_线图</title>
    <link rel="icon" href="https://static.jianshukeji.com/highcharts/images/favicon.ico" />
    <script src="https://img.hcharts.cn/highcharts/highcharts.js"></script>
    <script src="https://img.hcharts.cn/highcharts/modules/exporting.js"></script>
    <script src="https://img.hcharts.cn/highcharts-plugins/highcharts-zh_CN.js"></script>    
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="mainpage" runat="server">
    <div class="uk-height-1-1">
        <div class="uk-width-large-9-10 uk-width-medium-9-10 uk-width-small-1-1 uk-container-center">
            <div id="tony_block_article" class="uk-panel">
                <div class="uk-flex uk-flex-column">
                    <div id="line_basic" class="uk-panel uk-panel-box uk-margin-bottom"></div>
                    <div id="line_label" class="uk-panel uk-panel-box uk-margin-bottom"></div>
                    <div id="line_time-series" class="uk-panel uk-panel-box uk-margin-bottom"></div>
                    <div id="spline_inverted" class="uk-panel uk-panel-box uk-margin-bottom"></div>
                    <div id="spline_symbols" class="uk-panel uk-panel-box uk-margin-bottom"></div>
                    <div id="spline-plot-bands" class="uk-panel uk-panel-box uk-margin-bottom"></div>
                    <div id="spline-irregular-time" class="uk-panel uk-panel-box uk-margin-bottom"></div>
                    <div id="line-log-axis" class="uk-panel uk-panel-box uk-margin-bottom"></div>
                </div>
            </div>
        </div>
    </div>
    <script src="/Js/highcharts/linecharts.js"></script>
</asp:Content>
