/*...
File: Form editor inline Js File
*/

//ckeditor Inline
var ckInlineEditor = document.querySelectorAll(".ckeditor-inline")
if (ckInlineEditor) {
    Array.from(ckInlineEditor).forEach(function () {
        InlineEditor
            .create(document.querySelector('.ckeditor-inline'))
            .catch(function (error) {
                console.error(error);
            });
       
    });
}