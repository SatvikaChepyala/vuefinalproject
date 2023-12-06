import Articlebox from './components/Articlebox.vue';
import { __VLS_internalComponent, __VLS_componentsOption, __VLS_name } from './App.vue';

function __VLS_template() {
let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption;
let __VLS_own!: __VLS_SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots; })>;
let __VLS_localComponents!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
/* Style Scoped */
type __VLS_StyleScopedClasses = {};
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_resolvedLocalAndGlobalComponents!: {} &
__VLS_WithComponent<'MyHeader', typeof __VLS_localComponents, "MyHeader", "MyHeader", "MyHeader"> &
__VLS_WithComponent<'Articlebox', typeof __VLS_localComponents, "Articlebox", "Articlebox", "Articlebox">;
__VLS_components.MyHeader;
// @ts-ignore
[MyHeader,];
__VLS_components.Articlebox;
// @ts-ignore
[Articlebox,];
{
const __VLS_0 = ({} as 'MyHeader' extends keyof typeof __VLS_ctx ? { 'MyHeader': typeof __VLS_ctx.MyHeader; } : typeof __VLS_resolvedLocalAndGlobalComponents).MyHeader;
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{}, CompanyTitle: ("Article Dictionary"), Manager: ("Satvika Chepyala"), }));
({} as { MyHeader: typeof __VLS_0; }).MyHeader;
const __VLS_2 = __VLS_1({ ...{}, CompanyTitle: ("Article Dictionary"), Manager: ("Satvika Chepyala"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>) => void)({ ...{}, CompanyTitle: ("Article Dictionary"), Manager: ("Satvika Chepyala"), });
const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
}
{
const __VLS_5 = ({} as 'Articlebox' extends keyof typeof __VLS_ctx ? { 'Articlebox': typeof __VLS_ctx.Articlebox; } : typeof __VLS_resolvedLocalAndGlobalComponents).Articlebox;
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{}, Articledetails: ((__VLS_ctx.Articledetails)), }));
({} as { Articlebox: typeof __VLS_5; }).Articlebox;
const __VLS_7 = __VLS_6({ ...{}, Articledetails: ((__VLS_ctx.Articledetails)), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
({} as (props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>) => void)({ ...{}, Articledetails: ((__VLS_ctx.Articledetails)), });
const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
}
var __VLS_slots!: {};
// @ts-ignore
[Articledetails, Articledetails, Articledetails,];
return __VLS_slots;
}
