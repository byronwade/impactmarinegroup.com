import { Card, CardContent } from "@/components/ui/card";

export const renderBlock = (block: any) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case 'paragraph':
      return <p key={id} className="mb-4">{value.rich_text.map((text: any) => text.plain_text).join('')}</p>;
    case 'heading_1':
      return <h1 key={id} className="text-3xl font-bold mb-4">{value.rich_text.map((text: any) => text.plain_text).join('')}</h1>;
    case 'heading_2':
      return <h2 key={id} className="text-2xl font-bold mb-3">{value.rich_text.map((text: any) => text.plain_text).join('')}</h2>;
    case 'heading_3':
      return <h3 key={id} className="text-xl font-bold mb-2">{value.rich_text.map((text: any) => text.plain_text).join('')}</h3>;
    case 'bulleted_list_item':
      return <li key={id} className="ml-6 list-disc">{value.rich_text.map((text: any) => text.plain_text).join('')}</li>;
    case 'numbered_list_item':
      return <li key={id} className="ml-6 list-decimal">{value.rich_text.map((text: any) => text.plain_text).join('')}</li>;
    case 'to_do':
      return (
        <div key={id} className="flex items-center mb-2">
          <input type="checkbox" checked={value.checked} readOnly className="mr-2" />
          <span>{value.rich_text.map((text: any) => text.plain_text).join('')}</span>
        </div>
      );
    case 'toggle':
      return (
        <details key={id} className="mb-4">
          <summary className="cursor-pointer">{value.rich_text.map((text: any) => text.plain_text).join('')}</summary>
          <div className="ml-4 mt-2">
            {value.children?.map(renderBlock)}
          </div>
        </details>
      );
    case 'image':
      const src = value.type === 'external' ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0]?.plain_text : '';
      return (
        <figure key={id} className="mb-4">
          <img src={src} alt={caption} className="max-w-full h-auto" />
          {caption && <figcaption className="text-center text-sm mt-2">{caption}</figcaption>}
        </figure>
      );
    case 'divider':
      return <hr key={id} className="my-4" />;
    case 'quote':
      return <blockquote key={id} className="border-l-4 pl-4 italic my-4">{value.rich_text.map((text: any) => text.plain_text).join('')}</blockquote>;
    case 'code':
      return (
        <Card key={id} className="my-4">
          <CardContent className="p-4">
            <pre>
              <code>{value.rich_text.map((text: any) => text.plain_text).join('')}</code>
            </pre>
          </CardContent>
        </Card>
      );
    default:
      return <p key={id}>Unsupported block type: {type}</p>;
  }
};