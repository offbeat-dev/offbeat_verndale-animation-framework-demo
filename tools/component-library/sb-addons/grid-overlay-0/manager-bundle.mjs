try{
var R=__STORYBOOKAPI__,{ActiveTabs:B,Consumer:I,ManagerContext:L,Provider:P,addons:s,combineParameters:M,controlOrMetaKey:x,controlOrMetaSymbol:H,eventMatchesShortcut:N,eventToShortcut:F,isMacLike:G,isShortcutTaken:D,keyToSymbol:W,merge:w,mockChannel:K,optionOrAltSymbol:Y,shortcutMatchesShortcut:U,shortcutToHumanString:V,types:u,useAddonState:$,useArgTypes:q,useArgs:z,useChannel:Z,useGlobalTypes:j,useGlobals:m,useParameter:J,useSharedState:Q,useStoryPrepared:X,useStorybookApi:p,useStorybookState:ee}=__STORYBOOKAPI__;var l=__REACT__,{Children:ne,Component:se,Fragment:le,Profiler:ce,PureComponent:ie,StrictMode:ue,Suspense:me,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:pe,cloneElement:de,createContext:Se,createElement:_e,createFactory:Te,createRef:ye,forwardRef:Oe,isValidElement:be,lazy:he,memo:d,useCallback:S,useContext:Ce,useDebugValue:ge,useEffect:_,useImperativeHandle:fe,useLayoutEffect:ke,useMemo:Ee,useReducer:Ae,useRef:ve,useState:Re,version:Be}=__REACT__;var xe=__STORYBOOKCOMPONENTS__,{A:He,ActionBar:Ne,AddonPanel:Fe,Badge:Ge,Bar:De,Blockquote:We,Button:we,Code:Ke,DL:Ye,Div:Ue,DocumentWrapper:Ve,ErrorFormatter:$e,FlexBar:qe,Form:ze,H1:Ze,H2:je,H3:Je,H4:Qe,H5:Xe,H6:et,HR:tt,IconButton:T,IconButtonSkeleton:ot,Icons:y,Img:rt,LI:at,Link:nt,ListItem:st,Loader:lt,OL:ct,P:it,Placeholder:ut,Pre:mt,ResetWrapper:pt,ScrollArea:dt,Separator:St,Spaced:_t,Span:Tt,StorybookIcon:yt,StorybookLogo:Ot,Symbols:bt,SyntaxHighlighter:ht,TT:Ct,TabBar:gt,TabButton:ft,TabWrapper:kt,Table:Et,Tabs:At,TabsState:vt,TooltipLinkList:Rt,TooltipMessage:Bt,TooltipNote:It,UL:Lt,WithTooltip:Pt,WithTooltipPure:Mt,Zoom:xt,codeCommon:Ht,components:Nt,createCopyToClipboardFunction:Ft,getStoryHref:Gt,icons:Dt,interleaveSeparators:Wt,nameSpaceClassNames:wt,resetComponents:Kt,withReset:Yt}=__STORYBOOKCOMPONENTS__;var c="storybook/storybook-addon-grid-overlay",b=`${c}/tool`,O="gridOverlay",C=d(function(){let[e,h]=m(),i=p(),a=[!0,"true"].includes(e[O]),n=S(()=>{h({[O]:!a})},[a]);return _(()=>{i.setAddonShortcut(c,{label:"Toggle Grid Overlay [G]",defaultShortcut:["G"],actionName:"outline",showInMenu:!1,action:n})},[n,i]),l.createElement(T,{key:b,active:a,title:"Apply a grid to the preview",onClick:n},l.createElement(y,{icon:"grid"}))});s.register(c,()=>{s.add(b,{type:u.TOOL,title:"Grid Overlay",match:({viewMode:e})=>!!(e&&e.match(/^(story)$/)),render:C})});
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
//# sourceMappingURL=manager-bundle.mjs.map
