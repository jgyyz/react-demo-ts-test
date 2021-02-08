import * as React from "react";
import { Editor } from "@tinymce/tinymce-react";

const plugins = [
  "print preview searchreplace autolink directionality visualblocks visualchars",
  "fullscreen image link codesample media template code codesample table charmap",
  "hr pagebreak nonbreaking anchor insertdatetime advlist lists wordcount imagetools textpattern help emoticons autosave autoresize",
];
const toolbar1 =
  "code undo redo restoredraft | cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link anchor codesample";
const toolbar2 =
  "alignleft aligncenter alignright alignjustify outdent indent lineheight | styleselect formatselect fontselect fontsizeselect";
const toolbar3 =
  "bullist numlist | blockquote subscript superscript removeformat | table image media charmap emoticons hr pagebreak insertdatetime print preview | fullscreen";

interface ITinymceEditorProps {
  visible?: boolean;
}

const TinyMceEditor: React.FC<ITinymceEditorProps> = ({ visible = true }) => {
  if (!visible) {
    return <></>;
  }
  return (
    <div>
      <Editor
        id="tinymce-demo"
        // 该属性用于加载外部文件替换 tinymce 默认的 cdn
        // tinymceScriptSrc="https://cdn.bootcss.com/tinymce/5.5.0/tinymce.min.js"
        init={{
          language: "zh_CN",
          width: "100%",
          min_height: 400, // 该版本有 bug minHeight属性不生效
          height: 500,
          toolbar_mode: "wrap",
          plugins,
          toolbar: `${toolbar1} | ${toolbar2} | ${toolbar3}`,
          setup: function (editor) {
            // do something...
          },
          init_instance_callback: function (editor) {
            // do something...
          },
        }}
      />
    </div>
  );
};

export default TinyMceEditor;
