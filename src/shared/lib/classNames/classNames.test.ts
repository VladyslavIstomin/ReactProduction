import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with ony one param', () => {
        expect(classNames('className')).toBe('className');
    });

    test('with additional classes', () => {
        const result = 'className cls1 cls2';
        expect(classNames('className', {}, ['cls1', 'cls2'])).toBe(result);
    });

    test('with additional classes and mods', () => {
        const result = 'className hovered selected cls1 cls2';
        expect(classNames('className', { hovered: true, selected: true }, ['cls1', 'cls2']))
            .toBe(result);
    });

    test('with mods false', () => {
        const result = 'className selected cls1 cls2';
        expect(classNames('className', { hovered: false, selected: true }, ['cls1', 'cls2']))
            .toBe(result);
    });

    test('with mods undefined', () => {
        const result = 'className selected cls1 cls2';
        expect(classNames('className', { hovered: undefined, selected: true }, ['cls1', 'cls2']))
            .toBe(result);
    });
});