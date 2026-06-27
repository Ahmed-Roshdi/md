import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// المكونات المشتركة في كل الصفحات (الترويسة، البحث، الوضع الليلي)
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/Ahmed-Roshdi",
      LinkedIn: "https://www.linkedin.com/in/ahmed-roshdi",
    },
  } ),
}

// هيكلة الصفحات العادية (المقالات والصفحة الرئيسية)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    // تخصيص المستكشف ليكون مطابقاً لـ Obsidian
    Component.Explorer({
      title: "المستكشف",
      folderClickBehavior: "link", // الضغط على المجلد يفتحه كصفحة فهرس
      folderDefaultState: "open",  // إبقاء المجلدات مفتوحة افتراضياً
      useSavedState: true,         // تذكر حالة المجلدات (مفتوحة/مغلقة) عند التنقل
    }),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
    // إضافة مكون "أحدث الملاحظات" في الشريط الجانبي الأيمن
    Component.RecentNotes({
      title: "أحدث الإضافات",
      limit: 5,
    }),
  ],
}

// هيكلة صفحات الفهارس (عند الضغط على مجلد أو وسم)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.Explorer({
      title: "المستكشف",
      folderClickBehavior: "link",
      folderDefaultState: "open",
      useSavedState: true,
    }),
  ],
  right: [],
}
