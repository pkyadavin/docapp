(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{vY9x:function(n,t,e){"use strict";e.r(t);var o=e("CcnG"),l=function(){return function(){}}(),a=e("pMnS"),r=e("gIcY"),i=e("3WPo"),c=e("zFeF"),d=e("hq8H"),u=e("+fB7"),s=e("EPQ9"),p=e("mrSG"),g=e("QTcH"),m=e("mNo9"),f=e("ZYCi"),C=e("JoNJ"),_=e("j2jJ"),b=e("TEO1"),h=e("THpW"),O=e("VnD/"),M=function(n){function t(t,e,o,l,a,r,i){var c=n.call(this)||this;return c._util=t,c._menu=e,c._router=o,c._returnService=l,c._globalService=a,c._route=r,c._dataService=i,c.ListView=!0,c.filterValue=null,c.Tabs=[],c.columnDefs_glb=[{headerName:"RMA #",field:"RLRefnumber",width:160,cellRendererFramework:h.a},{headerName:"Warranty",field:"warrantystatus",width:125},{headerName:"Status",field:"RHstatus",width:175,cellRenderer:c.statusRender},{headerName:"RMA Source",field:"Source",width:135},{headerName:"Country",field:"CountryCode",width:135},{headerName:"RSO",field:"RSO",width:135},{headerName:"Return Type",field:"ServiceType",width:135},{headerName:"RMA Date",field:"returnDate",width:135}],c.columnDefs_pnd=[{headerName:"REF #",field:"RLRefnumber",width:160,cellRendererFramework:h.a},{headerName:"Warranty",field:"warrantystatus",width:125},{headerName:"Status",field:"RHstatus",width:175,cellRenderer:c.statusRender},{headerName:"RMA Source",field:"Source",width:135},{headerName:"Country",field:"CountryCode",width:135},{headerName:"RSO",field:"RSO",width:135},{headerName:"Return Type",field:"ServiceType",width:135},{headerName:"Requested Date",field:"returnDate",width:135}],c.columnDefs_oow=[{headerName:"REF #",field:"RLRefnumber",width:160,cellRendererFramework:h.a},{headerName:"Product Count",field:"totalItem",width:150},{headerName:"Customer Name",field:"customerName",width:175},{headerName:"Country",field:"CountryCode",width:135},{headerName:"RSO",field:"RSO",width:135},{headerName:"Return Type",field:"ServiceType",width:150},{headerName:"Requested Date",field:"returnDate",width:150}],c}return p.__extends(t,n),t.prototype.ngDoCheck=function(){var n=this;this.moduleTitle=this._menu.menus.filter(function(t){return t.routeKey===n._router.url})[0].title},t.prototype.statusRender=function(n){if(null!=n&&null!=n.value){if(null!=n)switch(n.value){case"Initiated":return'<span class="badge badge-warning" style="background-color: #ffbb34!important;"> '+n.value+" </span>";case"Received":return'<span class="badge badge-warning" style="background-color: #99d101!important;"> '+n.value+" </span>";case"Closed":return'<span class="badge badge-darkorange" style="background-color: #79a502!important;"> '+n.value+" </span>";case"Approved":return'<span class="badge badge-success" style="background-color: #ccc31c!important;"> '+n.value+" </span>";case"Open":return'<span class="badge badge-primary" style="background-color: #ccc31c!important;"> '+n.value+" </span>";default:return'<span class="badge badge-info"> '+n.value+" </span>"}return n}},t.prototype.toggleScaner=function(n){$(".scaner-body").animate({"margin-right":1==n?"0px":"-500px"},1e3),$("#scanRMA").focus(),$("#scanner-close").toggleClass("scanner-open"),$("#scanner-open").toggleClass("scanner-open")},t.prototype.ngOnInit=function(){var n=this;this.Tabs=[{name:"Global RMA(s)",code:"glb"},{name:"Pending RMA(s)",code:"pnd"}],this._route.paramMap.subscribe(function(t){if(n.status=t.get("Code"),n.brandCode=t.get("brand"),n.filterValue=null,n.dateFilter=null,"all"==n.status.toLowerCase()){var e=new Date;n.dateFilter=[],n.dateFilter.push(new Date(e.getMonth()+"-"+e.getDate()+"-"+e.getFullYear())),n.dateFilter.push(new Date)}}),this._router.events.pipe(Object(O.a)(function(n){return n instanceof f.e})).subscribe(function(){window.location.reload()}),this.renderRMAqueue(this.status)},t.prototype.renderRMAqueue=function(n){var t=this;this.status=n,this.gridOptions={rowData:null,columnDefs:null,enableColResize:!0,enableServerSideSorting:!0,rowSelection:"single",rowDeselection:!0,rowModelType:"infinite",pagination:!0,paginationPageSize:20,cacheOverflowSize:2,maxConcurrentDatasourceRequests:2,infiniteInitialRowCount:1,maxBlocksInCache:2,cacheBlockSize:20,rowHeight:38,context:{componentParent:this}},this.dataSource={rowCount:null,paginationPageSize:20,paginationOverflowSize:20,maxConcurrentDatasourceRequests:1,maxPagesInPaginationCache:1,getRows:function(n){var e=null,o=null;void 0!==n.sortModel[0]&&(e=n.sortModel[0].colId,o=n.sortModel[0].sort);var l=null,a=null,r=0;t.dateFilter&&(l="",a="",t.dateFilter.forEach(function(n){for(var t=n.toString().split(" ",4),e=0;e<t.length;e++)e>0&&(0==r?l+=t[e]+" ":a+=t[e]+" ");r++})),t._returnService.getReturnOrders(n.startRow,n.endRow,e,o,t.filterValue,t.status,l,a,t.brandCode).subscribe(function(e){var o=e.recordsets[0];t.Permissions=e.recordsets[1],t.LocalAccess=e.recordsets[1].map(function(n){return n.FunctionType}),t.hasPermission("View")||t._router.navigate(["dashboard"]),t.hasPermission("View"),t.gridOptions.api.setColumnDefs("glb"==t.status?t.columnDefs_glb:"pnd"==t.status?t.columnDefs_pnd:t.columnDefs_oow),0==e.totalcount?t.gridApi.showNoRowsOverlay():t.gridApi.hideOverlay(),n.successCallback(o,e.totalcount),t.ntID=0},function(n){console.log("this is error:"+n)})}},this.gridOptions.datasource=this.dataSource},t.prototype.onGridReady=function(n){this.gridApi=n.api,this.gridColumnApi=n.columnApi,null!=this.gridApi.api&&(this.gridApi.api.sizeColumnsToFit(),setTimeout(function(){this.gridApi.api.sizeColumnsToFit()},2e3))},t.prototype.ngOnDestroy=function(){},t.prototype.setLinkCellRender=function(n,t,e){if(e){var o=n.find(function(n){return n.field==t});null!=o&&(o.cellRenderer=this.cellEditRender)}},t.prototype.cellEditRender=function(n){if(null!=n&&null!=n.value){if(null!=n){var t='<a style="cursor:pointer; margin-right:4px" data-action-type="edit">\n      '+n.value+"</a>";return n.data&&n.data.hasFiles&&(t+='<i class="fa fa-paperclip" style="color:#919eab;font-size: 15px; cursor: pointer;"></i>'),n.data&&n.data.hasNotes&&(t+=' <i class="fa fa-comment" style="color:#919eab;font-size: 15px; cursor: pointer;"></i>'),t}return n}},t.prototype.onFilterChanged=function(){""===this.filterValue&&(this.filterValue=null),this.ntID=0,this.gridOptions.api.setDatasource(this.dataSource)},t.prototype.Show=function(n){"Add"==n&&(this.ntID=0,this._router.navigate(["back-office/returns/inspection"]))},t.prototype.Delete=function(n){void 0===n&&(n=this)},t.prototype.onSelectionChanged=function(){var n=this.gridOptions.api.getSelectedRows()[0];this.ntID=n?n.ID:0},t.prototype.onRowClicked=function(n){},t.prototype.EditClicked=function(n){this.getOrderDetailOnRowClick(n.RMANumber,n.status,n.CoTrackingNo)},t.prototype.getOrderDetailOnRowClick=function(n,t,e){var o="0";"dccreated"==e.toLowerCase()&&(o=e.toLowerCase()),this._router.navigate(["back-office/returns/queue/"+this.status.toLowerCase()+"/"+this.brandCode.toLowerCase()+"/"+n+"/"+o])},t.prototype.scanRMAByRMANumber=function(n){var t=this;this._returnService.scanRMA(n.replace("+","-"),"initiated",this.status).subscribe(function(e){1==e.recordsets[0][0].Status?(t._util.success("Scanned successfully.","Success"),e.recordsets[0][0].RMANumber&&t._router.navigate(["back-office/returns/queue/"+t.status.toLowerCase()+"/"+e.recordsets[0][0].RMANumber+"/"+n.replace("+","-")]),t.gridOptions&&t.gridOptions.api.setDatasource(t.dataSource)):0==e.recordsets[0][0].Status&&t._util.error(e.recordsets[0][0].ErrorMessage,"Error")})},t}(g.b),P=o["\u0275crt"]({encapsulation:0,styles:[".ag-cell-focus { -webkit-user-select: text !important;-moz-user-select: text !important;-ms-user-select: text !important;user-select: text !important; }",[".rma_box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0}.rma_box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:14px;font-weight:400;margin-bottom:0}.rma_box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   label.colorred[_ngcontent-%COMP%]{font-weight:600;font-size:12px;color:red}.rma_box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#212529;font-size:16px!important;font-weight:700!important;margin:0}.rma_box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:14px;color:#8bc34a;font-weight:400}.rma_box[_ngcontent-%COMP%]   address[_ngcontent-%COMP%]{font-size:14px;color:#212529;margin-bottom:5px}pr-0[_ngcontent-%COMP%]{padding-right:0}.iconbx[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:32px}.rma_box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;list-style:none}.rma_box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{float:left;width:37%}.rma_box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .iconbx[_ngcontent-%COMP%]{float:left;padding-right:5px}.rma_box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#212529;font-weight:700;font-size:12px;line-height:10px;margin:0}.rma_box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#212529;font-weight:400;font-size:12px;line-height:12px;margin:0}.rma_box[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child{width:25%}.rma_box[_ngcontent-%COMP%]{min-height:151px}.listofprod[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#212529;font-size:18px!important;font-weight:700!important;margin:0}.listofprod[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:12px;font-weight:400}.listofprod[_ngcontent-%COMP%]   .btn-danger[_ngcontent-%COMP%]{margin-right:10px}.listofprod[_ngcontent-%COMP%]   .hiddenRow[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#212529;font-size:12px;font-weight:400}.listofprod[_ngcontent-%COMP%]   .hiddenRow[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:#212529;font-size:14px;font-weight:700!important}.listofprod[_ngcontent-%COMP%]   td.hiddenRow[_ngcontent-%COMP%]{padding:15px!important;border:1px solid #e9e9e9;margin-bottom:15px}.listofprod[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tr.active[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child{box-shadow:none}.listofprod[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{border-collapse:separate;border-spacing:0 0}.listofprod[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], .listofprod[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%], .listofprod[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] > tfoot[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], .listofprod[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] > tfoot[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%], .listofprod[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%], .listofprod[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] > thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%]{border-top:0 solid;vertical-align:middle!important}.listofprod[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#00bcd4;font-size:16px}.listofprod[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#fff;font-size:14px}.listofprod[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-bottom:0}.reject_popup[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]{padding:10px}.reject_popup[_ngcontent-%COMP%]   .modal-dialog[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]{background-color:#fff;padding:0 0 10px}.reject_popup[_ngcontent-%COMP%]   h4.modal-title[_ngcontent-%COMP%]{color:#212529;font-size:18px;font-weight:700!important}.reject_popup[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]{padding:10px 0}.reject_popup[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]{background-color:#fff;padding:0}.reject_popup[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%]{height:50px!important}.reject_popup[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{text-transform:uppercase}.reject_popup[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{color:#fff;background:#ef5350;opacity:1;padding:0 5px;font-size:20px;width:24px;height:24px}.reject_popup[_ngcontent-%COMP%]{background:rgba(0,0,0,.6)}.widget-body.listofprod[_ngcontent-%COMP%], .widget-body.rma_box[_ngcontent-%COMP%]{padding:18px!important}.widget-body.listofprod[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{position:relative}.widget-body.listofprod[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input.colored-success[_ngcontent-%COMP%]{opacity:0;left:0;position:absolute;top:0;bottom:0;margin:0}button.btn.btn-default.btn-sm.pull-right.approved[_ngcontent-%COMP%]{background:#28a745!important;border-color:#28a745!important;color:#fff}button.btn.btn-default.btn-sm.pull-right.requested[_ngcontent-%COMP%]{background:#6c757d!important;border-color:#6c757d!important;color:#fff}button.btn.btn-default.btn-sm.pull-right.received[_ngcontent-%COMP%]{background:#007bff!important;border-color:#007bff!important;color:#fff}button.btn.btn-default.btn-sm.pull-right.replaced[_ngcontent-%COMP%]{background:#ffc107!important;border-color:#ffc107!important;color:#fff}button.btn.btn-default.btn-sm.pull-right.shipped[_ngcontent-%COMP%]{background:#17a2b8!important;border-color:#17a2b8!important;color:#fff}button.btn.btn-default.btn-sm.pull-right.delivered[_ngcontent-%COMP%]{background:#1a752f!important;border-color:#1a752f!important;color:#fff}.badge-warning[_ngcontent-%COMP%], .label-warning[_ngcontent-%COMP%]{background-color:#ffbb34!important;background-image:none!important}.badge-darkpink[_ngcontent-%COMP%], .label-darkpink[_ngcontent-%COMP%]{background-color:#ccc31c;background-image:none!important}.badge-success[_ngcontent-%COMP%], .label-success[_ngcontent-%COMP%]{background-color:#99d101;background-image:none!important}.badge-darkorange[_ngcontent-%COMP%], .label-darkorange[_ngcontent-%COMP%]{background-color:#79a502;background-image:none!important}.scanerSerch[_ngcontent-%COMP%]{background-color:#ccc31c!important;position:fixed;color:#fff;z-index:9999;right:0;top:89.2px;font-size:20px;border-top-left-radius:5px;border-bottom-left-radius:5px;padding:3px 12px;cursor:pointer;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12),0 1px 5px 0 rgba(0,0,0,.2);-webkit-animation:1.25s cubic-bezier(.66,0,0,1) infinite pulse;animation:1.25s cubic-bezier(.66,0,0,1) infinite pulse}@-webkit-keyframes pulse{to{box-shadow:0 0 0 45px rgba(232,76,61,0)}}@keyframes pulse{to{box-shadow:0 0 0 45px rgba(232,76,61,0)}}.scaner-body[_ngcontent-%COMP%]{text-align:left;background-color:#fff;box-shadow:0 0 5px #888;width:500px;position:fixed;right:0;margin-right:-500px;top:83px;padding:10px;z-index:1}.scanner-open[_ngcontent-%COMP%]{display:none}"]],data:{}});function w(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,22,"div",[["class","widget"]],null,null,null,null,null)),(n()(),o["\u0275eld"](1,0,null,null,21,"div",[["class","widget-body"]],null,null,null,null,null)),(n()(),o["\u0275eld"](2,0,null,null,13,"div",[["class","widget-header widget-header1"]],null,null,null,null,null)),(n()(),o["\u0275eld"](3,0,null,null,11,"div",[["class","input-group pull-left"]],null,null,null,null,null)),(n()(),o["\u0275eld"](4,0,null,null,5,"input",[["class","input-sm pull-left"],["name","searchText"],["placeholder","Search criteria includes all the visible fields.."],["style","margin-top:3px;width: 250px"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"keyup.enter"],[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,t,e){var l=!0,a=n.component;return"input"===t&&(l=!1!==o["\u0275nov"](n,5)._handleInput(e.target.value)&&l),"blur"===t&&(l=!1!==o["\u0275nov"](n,5).onTouched()&&l),"compositionstart"===t&&(l=!1!==o["\u0275nov"](n,5)._compositionStart()&&l),"compositionend"===t&&(l=!1!==o["\u0275nov"](n,5)._compositionEnd(e.target.value)&&l),"keyup.enter"===t&&(l=!1!==a.onFilterChanged()&&l),"ngModelChange"===t&&(l=!1!==(a.filterValue=e)&&l),l},null,null)),o["\u0275did"](5,16384,null,0,r.DefaultValueAccessor,[o.Renderer2,o.ElementRef,[2,r.COMPOSITION_BUFFER_MODE]],null,null),o["\u0275prd"](1024,null,r.NG_VALUE_ACCESSOR,function(n){return[n]},[r.DefaultValueAccessor]),o["\u0275did"](7,671744,null,0,r.NgModel,[[8,null],[8,null],[8,null],[6,r.NG_VALUE_ACCESSOR]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),o["\u0275prd"](2048,null,r.NgControl,null,[r.NgModel]),o["\u0275did"](9,16384,null,0,r.NgControlStatus,[[4,r.NgControl]],null,null),(n()(),o["\u0275eld"](10,0,null,null,3,"span",[["class","input-group-btn pull-left"]],null,null,null,null,null)),(n()(),o["\u0275eld"](11,0,null,null,2,"button",[["class","btn btn-secondary btn-sm"],["style","margin-top:3px;"]],null,[[null,"click"]],function(n,t,e){var o=!0;return"click"===t&&(o=!1!==n.component.onFilterChanged()&&o),o},null,null)),(n()(),o["\u0275eld"](12,0,null,null,0,"i",[["class","fa fa-search"]],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,["Search "])),(n()(),o["\u0275eld"](14,0,null,null,0,"i",[["class","fa fa-info-circle margin-top-10 margin-left-5"],["style","font-size:16px;"],["title","Multiple search keywords can be keyed-in as comma-separated list."]],null,null,null,null,null)),(n()(),o["\u0275eld"](15,0,null,null,0,"div",[["class","clearfix"]],null,null,null,null,null)),(n()(),o["\u0275eld"](16,0,null,null,5,"div",[["class","no-padding marginTop34 card1"]],null,null,null,null,null)),(n()(),o["\u0275eld"](17,16777216,null,null,4,"ag-grid-angular",[["class","ag-theme-balham"],["id","grid1"],["style","height:100%;width:100%"]],null,[[null,"gridReady"],[null,"selectionChanged"],[null,"rowClicked"]],function(n,t,e){var o=!0,l=n.component;return"gridReady"===t&&(o=!1!==l.onGridReady(e)&&o),"selectionChanged"===t&&(o=!1!==l.onSelectionChanged()&&o),"rowClicked"===t&&(o=!1!==l.onRowClicked(e)&&o),o},i.b,i.a)),o["\u0275prd"](512,null,c.Ng2FrameworkFactory,c.Ng2FrameworkFactory,[d.BaseComponentFactory,o.NgZone]),o["\u0275prd"](512,null,u.Ng2FrameworkComponentWrapper,u.Ng2FrameworkComponentWrapper,[]),o["\u0275did"](20,4898816,[["agGrid",4]],1,s.AgGridNg2,[o.ElementRef,o.ViewContainerRef,c.Ng2FrameworkFactory,u.Ng2FrameworkComponentWrapper,o.ComponentFactoryResolver],{gridOptions:[0,"gridOptions"]},{selectionChanged:"selectionChanged",rowClicked:"rowClicked",gridReady:"gridReady"}),o["\u0275qud"](603979776,1,{columns:1}),(n()(),o["\u0275eld"](22,0,null,null,0,"div",[["class","clearfix"]],null,null,null,null,null))],function(n,t){var e=t.component;n(t,7,0,"searchText",e.filterValue),n(t,20,0,e.gridOptions)},function(n,t){n(t,4,0,o["\u0275nov"](t,9).ngClassUntouched,o["\u0275nov"](t,9).ngClassTouched,o["\u0275nov"](t,9).ngClassPristine,o["\u0275nov"](t,9).ngClassDirty,o["\u0275nov"](t,9).ngClassValid,o["\u0275nov"](t,9).ngClassInvalid,o["\u0275nov"](t,9).ngClassPending)})}function x(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"app-queue",[],null,null,null,w,P)),o["\u0275did"](1,507904,null,0,M,[g.d,m.a,f.o,_.a,C.a,f.a,b.a],null,null)],function(n,t){n(t,1,0)},null)}var y=o["\u0275ccf"]("app-queue",M,x,{},{},[]),R=e("atuK"),v=e("z5nN"),k=e("E2Cs"),N=e("wVa0"),S=e("NPoV"),F=e("5lbu"),A=e("z1jm"),D=e("Z//C"),z=e("pX8E"),T=e("ai00"),I=e("oAIN"),E=e("Ip0R"),L=e("yrmi"),V=e("xkgV"),j=e("t/Na"),q=e("RDNO"),G=e("Gw19"),B=e("hTtr"),W=e("W4xs"),X=e("NJnL"),J=e("lqqz"),Y=e("ARl4"),H=e("DQlY"),Q=e("8Vs6"),U=e("JSOo"),Z=e("ZYjt"),K=e("Xedo"),nn=e("XWMX"),tn=e("uB2D"),en=e("ygbx"),on=e("tIkO"),ln=function(){return function(){}}(),an=e("Sj5B"),rn=e("5NQ/"),cn=e("SXLW"),dn=e("PCNd");e.d(t,"GnQueueModuleNgFactory",function(){return un});var un=o["\u0275cmf"](l,[],function(n){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,y,R.a,R.b,R.c,v.a,v.b,k.a,N.a,S.a,F.a,A.a,D.a,z.a,T.a,I.a]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,E.NgLocalization,E.NgLocaleLocalization,[o.LOCALE_ID,[2,E["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,L.f,L.f,[]),o["\u0275mpd"](4608,r["\u0275angular_packages_forms_forms_j"],r["\u0275angular_packages_forms_forms_j"],[]),o["\u0275mpd"](4608,V.e,V.e,[]),o["\u0275mpd"](4608,j.l,j.r,[E.DOCUMENT,o.PLATFORM_ID,j.p]),o["\u0275mpd"](4608,j.s,j.s,[j.l,j.q]),o["\u0275mpd"](5120,j.a,function(n,t){return[n,new q.a(t),new G.a,new B.a]},[j.s,W.a]),o["\u0275mpd"](4608,j.o,j.o,[]),o["\u0275mpd"](6144,j.m,null,[j.o]),o["\u0275mpd"](4608,j.k,j.k,[j.m]),o["\u0275mpd"](6144,j.b,null,[j.k]),o["\u0275mpd"](4608,j.g,j.n,[j.b,o.Injector]),o["\u0275mpd"](4608,j.c,j.c,[j.g]),o["\u0275mpd"](4608,X.a,X.a,[o.RendererFactory2]),o["\u0275mpd"](4608,J.a,J.a,[o.ComponentFactoryResolver,o.NgZone,o.Injector,X.a,o.ApplicationRef]),o["\u0275mpd"](4608,Y.x,Y.x,[]),o["\u0275mpd"](4608,Y.z,Y.z,[]),o["\u0275mpd"](4608,Y.a,Y.a,[]),o["\u0275mpd"](4608,Y.e,Y.e,[]),o["\u0275mpd"](4608,Y.c,Y.c,[]),o["\u0275mpd"](4608,Y.g,Y.g,[]),o["\u0275mpd"](4608,Y.y,Y.y,[Y.z,Y.g]),o["\u0275mpd"](4608,H.a,H.a,[o.RendererFactory2,J.a]),o["\u0275mpd"](4608,Q.Ng2ComponentFactory,Q.Ng2ComponentFactory,[o.ComponentFactoryResolver]),o["\u0275mpd"](6144,d.BaseComponentFactory,null,[Q.Ng2ComponentFactory]),o["\u0275mpd"](4608,r.NgForm,r.NgForm,[[6,r.NG_VALIDATORS],[6,r.NG_ASYNC_VALIDATORS]]),o["\u0275mpd"](4608,r.FormBuilder,r.FormBuilder,[]),o["\u0275mpd"](4608,U.a,U.a,[j.c,W.a]),o["\u0275mpd"](4608,C.a,C.a,[Z.b]),o["\u0275mpd"](4608,K.a,K.a,[j.c]),o["\u0275mpd"](4608,nn.a,nn.a,[j.c]),o["\u0275mpd"](4608,tn.a,tn.a,[j.c]),o["\u0275mpd"](4608,en.a,en.a,[]),o["\u0275mpd"](4608,_.a,_.a,[j.c,W.a,g.d]),o["\u0275mpd"](1073742336,E.CommonModule,E.CommonModule,[]),o["\u0275mpd"](1073742336,f.s,f.s,[[2,f.y],[2,f.o]]),o["\u0275mpd"](1073742336,ln,ln,[]),o["\u0275mpd"](1073742336,L.e,L.e,[]),o["\u0275mpd"](1073742336,r["\u0275angular_packages_forms_forms_bc"],r["\u0275angular_packages_forms_forms_bc"],[]),o["\u0275mpd"](1073742336,r.FormsModule,r.FormsModule,[]),o["\u0275mpd"](1073742336,V.a,V.a,[]),o["\u0275mpd"](1073742336,Y.d,Y.d,[]),o["\u0275mpd"](1073742336,H.d,H.d,[]),o["\u0275mpd"](1073742336,j.e,j.e,[]),o["\u0275mpd"](1073742336,j.d,j.d,[]),o["\u0275mpd"](1073742336,an.a,an.a,[]),o["\u0275mpd"](1073742336,rn.b,rn.b,[]),o["\u0275mpd"](1073742336,cn.AgGridModule,cn.AgGridModule,[]),o["\u0275mpd"](1073742336,dn.a,dn.a,[]),o["\u0275mpd"](1073742336,l,l,[]),o["\u0275mpd"](1024,f.m,function(){return[[{path:":Code/:brand",pathMatch:"full",component:M,canActivate:[on.a],runGuardsAndResolvers:"always"}],[]]},[]),o["\u0275mpd"](256,j.p,"XSRF-TOKEN",[]),o["\u0275mpd"](256,j.q,"X-XSRF-TOKEN",[])])})}}]);