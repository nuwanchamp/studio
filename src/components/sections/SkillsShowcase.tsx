'use client';
import { getSkills } from '@/lib/contentManager';
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';
import { Network, Node, Edge, Options } from 'vis-network';
import { DataSet } from 'vis-data';
import { Maximize2, ZoomIn } from 'lucide-react';

// Function to generate blue color based on expertise level
// Higher expertise = more vibrant blue, lower expertise = darker blue
const getBlueShade = (expertise: number) => {
  // Base blue color: hsl(210, 100%, 50%)
  // For lower expertise, reduce saturation and significantly reduce lightness to make it darker
  const saturation = 50 + (expertise / 100) * 50; // 50-100%
  const lightness = 5 + Math.pow(expertise / 100, 2) * 45;  // 5-50% with exponential increase
  return `hsl(210, ${saturation}%, ${lightness}%)`;
};

// Get skills data from content manager
const skillsData = getSkills();

export function SkillsShowcase() {
  const networkRef = useRef<HTMLDivElement>(null);
  const [network, setNetwork] = useState<Network | null>(null);

  useEffect(() => {
    if (!networkRef.current) return;

    // Create nodes from skills data
    const nodes = new DataSet<Node>(
      skillsData.map((skill, index) => {
        // Scale expertise to determine node size (min 10, max 25)
        const size = 10 + (skill.expertise / 100) * 15;

        return {
          id: index,
          label: skill.name,
          title: `${skill.name} (${skill.category})`,
          color: {
            background: getBlueShade(skill.expertise),
            border: '#1a365d', // Darker blue border
            highlight: {
              background: getBlueShade(Math.min(100, skill.expertise + 10)), // Slightly more vibrant when highlighted
              border: '#1a365d'
            }
          },
          font: {
            color: 'white', // White text for better contrast with blue background
            size: 14 + (skill.expertise / 100) * 6, // Scale font size based on expertise
            face: 'Arial, sans-serif',
            bold: skill.expertise > 80 ? 'bold' : undefined // Bold text for high expertise skills
          },
          size: size,
          value: skill.expertise, // Used for scaling in some layouts
          shape: 'dot',
          group: skill.category // Group by category
        };
      })
    );

    // Create edges (connections between nodes)
    // Create one-way hierarchical connections from parent skills to sub-skills
    const edges = new DataSet<Edge>();

    // Create a map of skill names to their indices
    const skillNameToIndex: Record<string, number> = {};
    skillsData.forEach((skill, index) => {
      skillNameToIndex[skill.name] = index;
    });

    // Create edges from parent skills to their sub-skills
    skillsData.forEach((skill, index) => {
      // Find the parent skill based on the category
      // If the category matches another skill's name, create an edge from that skill to this one
      const parentSkillIndex = skillNameToIndex[skill.category];

      if (parentSkillIndex !== undefined) {
        edges.add({
          from: parentSkillIndex, // Parent skill
          to: index, // Child skill
          color: { color: '#4299e1', opacity: 0.4 }, // Light blue color with opacity
          width: 1.5, // Slightly thicker for better visibility
          arrows: {
            to: true // Add arrow to show direction from parent to child
          }
        });
      }
    });

    // Configure options for the network
    const options: Options = {
      nodes: {
        borderWidth: 1.5,
        borderWidthSelected: 3,
        shadow: true,
        shape: 'dot',
        scaling: {
          min: 10,
          max: 25,
          label: {
            enabled: true,
            min: 14,
            max: 20
          }
        },
        color: {
          hover: {
            border: '#2c5282', // Darker blue on hover
          }
        }
      },
      edges: {
        width: 1.5,
        selectionWidth: 2,
        smooth: {
          enabled: true,
          type: 'continuous',
          forceDirection: 'horizontal',
          roundness: 0.5
        },
        color: {
          inherit: false,
          color: '#4299e1',
          opacity: 0.4
        },
        arrows: {
          to: {
            enabled: true,
            scaleFactor: 0.5
          }
        }
      },
      physics: {
        forceAtlas2Based: {
          gravitationalConstant: -50,
          centralGravity: 0.01,
          springLength: 100,
          springConstant: 0.08
        },
        maxVelocity: 50,
        solver: 'forceAtlas2Based',
        timestep: 0.35,
        stabilization: { iterations: 150 }
      },
      interaction: {
        hover: true,
        tooltipDelay: 200,
        zoomView: true,
        dragView: true
      }
    };

    // Create the network
    const networkInstance = new Network(
      networkRef.current,
      { nodes, edges },
      options
    );

    setNetwork(networkInstance);

    // Cleanup on unmount
    return () => {
      if (networkInstance) {
        networkInstance.destroy();
      }
    };
  }, []);

  // Function to fit all nodes in view
  const handleFitView = () => {
    if (network) {
      network.fit({
        animation: {
          duration: 1000,
          easingFunction: 'easeInOutQuad'
        }
      });
    }
  };

  // Function to reset zoom level to 100%
  const handleResetZoom = () => {
    if (network) {
      network.moveTo({
        scale: 1.0,
        animation: {
          duration: 1000,
          easingFunction: 'easeInOutQuad'
        }
      });
    }
  };

  return (
    <div className="w-full">

        {/* Network container with relative positioning for absolute button placement */}
        <div className="relative">
          <div 
            ref={networkRef} 
            className="w-full h-[500px]"
          />

          {/* Controller buttons */}
          <div className="absolute top-[15px] right-[15px] flex space-x-2">
            {/* Fit view button */}
            <button
              onClick={handleFitView}
              className="p-2 text-white hover:text-white opacity-70 hover:opacity-100 rounded-full transition-all duration-200 flex items-center justify-center"
              title="Fit all nodes in view"
            >
              <Maximize2 size={18} />
            </button>

            {/* Reset zoom button */}
            <button
              onClick={handleResetZoom}
              className="p-2 text-white hover:text-white opacity-70 hover:opacity-100 rounded-full transition-all duration-200 flex items-center justify-center"
              title="Reset zoom to 100%"
            >
              <ZoomIn size={18} />
            </button>
          </div>
        </div>

        {/* Caption */}
        <p className="text-xs text-center text-muted-foreground mt-6">
          Skills are visualized as a network where size represents level of expertise. 
          Arrows indicate hierarchical relationships, pointing from parent skills to their sub-skills.
        </p>
    </div>
  );
}
