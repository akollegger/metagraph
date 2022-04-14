import { descriptive, GraphLexicon, hasGraphLexicon, makeLexicon } from './descriptive';

describe('descriptive', () => {
  it('should work', () => {
    expect(descriptive()).toEqual('descriptive');
  });
});

describe('graph lexicon', () => {
  it("may be explicitly empty", () => {
    const lexicon = makeLexicon()
    expect(hasGraphLexicon(lexicon)).toBeTruthy()
  })
  it("can have property keys", () => {
    const lexicon:GraphLexicon = makeLexicon(["name"]);
    expect(lexicon.propertyKeys).toContain('name')
  })
  it("can have node labels", () => {
    const lexicon:GraphLexicon = makeLexicon([], ['person']);
    expect(lexicon.propertyKeys.length).toBe(0)
    expect(lexicon.nodeLabels).toContain('person')
    expect(lexicon.relationshipTypes.length).toBe(0)
  })
  it("can have relationship types", () => {
    const lexicon:GraphLexicon = makeLexicon([], [], ['FRIENDS_WITH']);
    expect(lexicon.propertyKeys.length).toBe(0)
    expect(lexicon.nodeLabels.length).toBe(0)
    expect(lexicon.relationshipTypes).toContain('FRIENDS_WITH')
  })
})