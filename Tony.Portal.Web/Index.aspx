<%@ Page Language="C#" MasterPageFile="~/Top.Master" AutoEventWireup="true" CodeBehind="Index.aspx.cs" Inherits="Tony.Portal.Web.Index" %>

<asp:Content ID="Content1" ContentPlaceHolderID="headcontent" runat="server">
    <link rel="stylesheet" href="Css/style.css" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="mainpage" runat="server">
    <div class="uk-height-1-1">
        <div class="uk-width-large-4-5 uk-width-medium-3-4 uk-width-small-1-1 uk-container-center">
            <div id="tony_block_article" class="uk-text-break uk-panel uk-panel-box">
                <article class="uk-article uk-panel-hover">
                    <h1 class="uk-article-title">尝试下前台</h1>
                    <p class="uk-article-meta">一直以来就对前台非常有兴趣，毕竟是可视化的东西，写的代码立刻就可以在前台看到效果还是非常开心的</p>
                </article>
                <article class="uk-article uk-panel-hover">
                    <h1 class="uk-article-title">Uikit前端框架</h1>
                    <p class="uk-article-meta">前几天在网上看到一个页面自适应屏幕非常帅，于是深入研究了下，发现这个网站是使用到了Uikit的一个前端开源框架，顿时大感兴趣，
                        于是就有了这个网站了。
                    </p>
                </article>
            </div>
        </div>
    </div>
</asp:Content>
