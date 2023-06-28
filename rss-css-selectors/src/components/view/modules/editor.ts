import levels from '../../../data/levels';
import { createElement, createNumbersList, getElement } from '../../../functions/functions';

class Editor {
    private data: Array<string | string[]>;
    private level: number;

    constructor(level: number) {
        this.level = level;
        this.data = levels[level].htmlContent;
    }
    public drawEditor(): void {
        const editor = getElement('.editor__wrapper');
        editor.append(this.drawCssEditor(), this.drawHtmlEditor());
        this.createHtmlContent(this.level);
    }
    private drawCssEditor(): HTMLElement {
        const cssEditor = createElement('div', 'editor__css', '', null);
        createElement('div', 'editor__header', 'CSS', cssEditor);
        const cssEditorContent = createElement('div', 'editor__content-css', '', cssEditor);

        const inputContent = createElement('div', 'editor__input__content', '', cssEditorContent);
        const editorInput = createElement('input', 'editor__input', '', inputContent);
        editorInput.setAttribute('placeholder', 'введите CSS селектор');
        editorInput.setAttribute('type', 'text');
        createElement('button', 'editor__button', 'Enter', inputContent);

        const listNumbers = createNumbersList();
        cssEditorContent.append(listNumbers, inputContent);
        return cssEditor;
    }
    private drawHtmlEditor(): HTMLElement {
        const htmlEditor = createElement('div', 'editor__html', '', null);
        createElement('div', 'editor__header', 'HTML', htmlEditor);
        const editorContent = createElement('div', 'editor__content-html', '', htmlEditor);
        const listNumbers = createNumbersList();
        editorContent.append(listNumbers);
        return htmlEditor;
    }

    public createHtmlContent(level: number): void {
        this.data = levels[level].htmlContent;
        if (document.querySelector('.editor__content')) this.clearHtmlContent();
        const editorHtml = getElement('.editor__content-html');
        const editorHtmlContent = createElement('div', 'editor__content', '', editorHtml);
        this.createHtmlContentTags(this.data, editorHtmlContent);
    }

    private createHtmlContentTags(data: Array<string | string[]>, parentElement: HTMLElement): void {
        data.forEach((item: string | string[], index: number) => {
            const dataIndex = String(index + 1);
            if (typeof item === 'string') {
                const editorLine = createElement('div', 'editor__line', item, parentElement);

                if (editorLine.parentElement?.classList.contains('editor__content')) {
                    editorLine.setAttribute('data-index', dataIndex);
                }
            } else {
                const editorBlock = createElement('div', 'editor__block', '', parentElement);
                editorBlock.setAttribute('data-index', dataIndex);
                this.createHtmlContentTags(item, editorBlock);
            }
        });
    }

    private clearHtmlContent(): void {
        const editorHtml = getElement('.editor__content-html');
        const editorContent = getElement('.editor__content');
        if (editorHtml && editorContent) editorHtml.removeChild(editorContent);
    }
}
export default Editor;