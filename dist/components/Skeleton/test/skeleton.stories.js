var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _react=_interopRequireDefault(require("react"));var _react2=require("@storybook/react");var _core=require("@bluebase/core");var _jsxFileName="/Users/artalat/Coding/bluebase/plugin-skeleton-loader/src/components/Skeleton/test/skeleton.stories.tsx";var Skeleton=(0,_core.getComponent)('Skeleton');(0,_react2.storiesOf)('skeleton',module).add('rectangle skeleton ',function(){return _react.default.createElement(Skeleton,{rx:7,ry:7,type:"Rect",height:90,width:200,__source:{fileName:_jsxFileName,lineNumber:12}});}).add('circle skeleton ',function(){return _react.default.createElement(Skeleton,{cx:30,cy:30,r:30,type:"Circle",__source:{fileName:_jsxFileName,lineNumber:25}});});