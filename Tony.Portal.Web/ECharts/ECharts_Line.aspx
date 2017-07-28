<%@ Page Language="C#" MasterPageFile="~/Top.Master" AutoEventWireup="true" CodeBehind="ECharts_Line.aspx.cs" Inherits="Tony.Portal.Web.ECharts.ECharts_Line" %>

<asp:Content ID="Content1" ContentPlaceHolderID="headcontent" runat="server">
    <title>EChart_折线图</title>
    <link rel="icon" href="../Img/echarticon.png" />
    <script src="/Js/echarts/echarts.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="mainpage" runat="server">
    <div class="uk-height-1-1">
        <div class="uk-width-large-9-10 uk-width-medium-9-10 uk-width-small-1-1 uk-container-center">
            <div id="tony_block_article" class="uk-panel">
                <div class="uk-flex uk-flex-column">
                    <div id="line_large" class="uk-panel uk-panel-box uk-margin-bottom" style="width:100%;height:400px;"></div>
                </div>
            </div>
        </div>
    </div>
    <script src="/Js/echarts/echart_scatter.js"></script>
</asp:Content>
