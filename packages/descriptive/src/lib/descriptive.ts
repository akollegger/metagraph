export function descriptive(): string {
  return 'descriptive';
}


///////////////////////////////////////
// Graph description

/**
 * PropertyKey is a graph symbol used to associate 
 * a distinct property value with a GraphElement.
 */
export type PropertyKey = string

/**
 * Property value types.
 * 
 * Hm.. can we know the kinds of values which exist in the graph?
 * Let's assume yes. :)
 */
export type PropertyValueType = "string" | "integer" | "boolean"

/**
 * NodeLabel is a graph symbol used to associate 
 * groups of Nodes.
 */
export type NodeLabel = string

/**
 * RelationshipType is a graph symbol used 
 * to associate groups of Relationships.
 */
export type RelationshipType = string

/**
 * GraphLexicon is a categorized set of graph symbols.
 */
export interface GraphLexicon {
  propertyKeys: PropertyKey[] | []
  nodeLabels: NodeLabel[] | []
  relationshipTypes: RelationshipType[] | []
}

export const makeLexicon = (
  propertyKeys:PropertyKey[] = [],
  nodeLabels:NodeLabel[] = [],
  relationshipTypes:RelationshipType[] = []
):GraphLexicon => ({
  propertyKeys,
  nodeLabels,
  relationshipTypes
})

export const hasGraphLexicon = <T extends Partial<GraphLexicon>>(o:T): o is T & GraphLexicon => {
  return  "propertyKeys" in o 
    && "nodeLabels" in o
    && "relationshipTypes" in o;
}

///////////////////////////////////////
// Element descriptions

export type PropertyRecordDescription = Record<PropertyKey, PropertyValueType>

export interface NodeDescription {
  /**
   * Reference name for this description,
   * which is metadata about the metadata. :)
   */
  name: string
  labels:NodeLabel[] | []
  properties: PropertyRecordDescription
}

export interface RelationshipDescription {
  name: string
  type: RelationshipType
  head: NodeDescription[]
  tail: NodeDescription[]
  properties: PropertyRecordDescription
}

export interface GraphDescription {
  name: string
  categories: NodeDescription[]
  families: RelationshipDescription[] | []
}


///////////////////////////////////////
// Classification  
// (Bloom-like concepts to group similar nodes and relationships)

export interface NodeCategory {
  name: string
  nodes: NodeDescription[] 
}

export interface RelationshipFamily {
  name: string
  relationships: RelationshipDescription[]
}

///////////////////////////////////////
// Sub-graphs  

/**
 * Disconnected sub-graph described by NodeCategories
 */
export interface GraphSection {
  name: string
  categories: NodeCategory[]
}

/**
 * Connected sub-graph defined by RelationshipFamilies
 */
export interface GraphPlane {
  name: string
  families: RelationshipFamily[]
}
