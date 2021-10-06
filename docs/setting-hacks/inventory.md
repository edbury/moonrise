import GearTable from "../../src/components/GearTable";

# Inventory

## Availability

Not all items are available for purchase from a cart in your remote village. These codes represent what we recommend for item availability in the various settlement types.

<dl>
  <dt>0</dt>
  <dd>Available in all settlements</dd>
  <dt>1</dt>
  <dd>Available in busy crossroads, walled towns, bustling metropolises or dilapidated ports</dd>
  <dt>2</dt>
  <dd>Available in bustling metropolises and dilapidated portsi</dd>
  <dt>3</dt>
  <dd>Available only in wizards’ towers, forgotten temple complexes or religious bastions</dd>
</dl>

### Black Market

If an adventurer would like to purchase an item listed as unavailable in their current settlement, they may try to find a black market vendor.

- Make a Circles test with an obstacle equal to 1 plus the listed availability number for the item in question.
- Making this test on the docks of a dilapidated port grants +1D . Also don’t forget your hometown Circles bonus at level 3
- If successful, the Resources obstacle to purchase the item in question is increased by the difference in availability level.

## Equipment

### Animals

Presented here are a list of animals who can be purchased at market.

<GearTable title="Animals">
  <GearTable.Item name="Cow" cost="3" slots="-" avail="0"/>
  <GearTable.Item name="Dog, Fighting" cost="4" slots="-" avail="2"/>
  <GearTable.Item name="Dog, Hunting" cost="3" slots="-" avail="1"/>
  <GearTable.Item name="Dog, Working" cost="2" slots="-" avail="0"/>
  <GearTable.Item name="Donkey" cost="2" slots="-" avail="0"/>
  <GearTable.Item name="Goat" cost="2" slots="-" avail="0"/>
  <GearTable.Item name="Hen" cost="1" slots="carried 1" avail="0"/>
  <GearTable.Item name="Horse, Draft" cost="3" slots="-" avail="1"/>
  <GearTable.Item name="Horse, Riding" cost="4" slots="-" avail="1"/>
  <GearTable.Item name="Horse, War" cost="6" slots="-" avail="1"/>
  <GearTable.Item name="Mule" cost="3" slots="-" avail="1"/>
  <GearTable.Item name="Ox" cost="4" slots="-" avail="0"/>
  <GearTable.Item name="Pig" cost="2" slots="-" avail="0"/>
  <GearTable.Item name="Pony" cost="2" slots="-" avail="0"/>
  <GearTable.Item name="Rooster" cost="2" slots="carried 2 or worn/head" avail="0"/>
  <GearTable.Item name="Sheep" cost="2" slots="-" avail="0"/>
</GearTable>

#### Cat

Cats are not raised to be sold in most settlements and thus are not listed with a Resources obstacle for purchase. They live among settlements and may adopt a companion if they so choose.

Cats live in base camps or homes. A cat can prevent scavengers in your base camp or the Vermin home event. If you generate either result, total the number of cats (up to a maximum of five) and roll 1d6. If you roll equal to or less than their number, the cats chase away the vermin. If you roll higher, they sit and smugly watch the rats do their work. A cat also grants +1D to recover from anger to one adventurer during each base camp or town phase.

Cats do not require food or water and will hunt for themselves. They occupy no space in a base camp or home, but they are pack 1 if traveling with you on a journey. A cat taken into a ruin or dungeon location transforms into a goblin or imp and disappears.

Test Butcher to convert a cat into 1 portion of meat and bone.

#### Cow

A cow produces 1d6 portions of milk during a base camp phase.

Test Butcher to convert the animal into 5d6 portions of meat and bone and 2d3 hides.

#### Dog

A fighting dog is tormented until it behaves violently on command. A fighting dog will help their owner in a kill, capture, drive off or pursue conflict if assigned a point of disposition.

A hunting dog grants +1D of help for tests involving hunting, stalking, pursuing or harrying. A hunting dog will help its companion in a capture, drive off or pursue conflict if assigned a point of disposition.

A working dog will fetch and carry. They can be fitted with a harness to drag a pulk, made part of a dog sled team or saddled with two pouches, providing two inventory slots for its two-legged companion.

Stray dogs live among nearly all settlement types. They are not available for purchase but may choose to adopt companions who align with their interests in food, pets and naps.

Dogs do not love caves and dungeons and prefer to remain in camp rather than embark on such bullshit.

Test Butcher to convert the animal into 1d6+1 portions of meat and bone, and one hide.

#### Donkey

This tough, friendly ungulate can carry a rider or 1 sk of cargo. P Test Butcher to convert the animal to 2d6 portions of meat and
bone, and one hide.

#### Goat

A goat grants +1D to Peasant tests to clear fields, and a she-goat produces 1 portion of milk during each base camp phase.

Test Butcher to convert the animal into 1d6+1 portions of meat and bone, and one hide.

#### Hen

A hen produces one egg on a roll of 4-6 on a 1d6 during each base camp phase. The egg can be consumed directly as a single fresh ration or it can be hatched to produce another chicken at the conclusion of the next town phase.

Test Butcher to convert a hen into 1d3 portions of meat and bone (and 1 portion of feathers).

#### Horse

Draft horses are trained to work in harness and traces pulling plows, carts, sleighs and other conveyances.

Riding horses are trained to carry riders over long distances.

Warhorses are trained to carry a warrior into combat. They’re temperamental, delicate and poor at hauling, but they’re great in a fight.

A horse can be fitted with two saddle bags (1 sk), each equivalent to a satchel (containing three inventory slots). They can also be saddled to carry a rider (1 sk) or harnessed to pull a conveyance (2 sk).

Test Butcher to convert to a horse to 3d6 portions of meat and bone and 1d2 hides.

#### Mule

Stronger than it looks, the mule grants +1D to hauling tests. It can carry 1 sk of cargo.

Test Butcher to convert the animal to 2d6 portions of meat and bone, and one hide.

#### Ox

An ox grants +2D help to all Laborer and Health tests involving pulling or dragging. Oxen can be laden with 2 sk of cargo contained in sacks, chests or baskets, attached with webbing or rope.

Test Butcher to convert the animal to 5d6 portions of meat and bone, and 1d3 hides.

#### Pig

Pigs grant +1D to Scavenger tests to forage for food.

Test Butcher to convert to a pig to 3d6 portions of meat and bone.

#### Rooster

A rooster serves no purpose aside from servicing hens, standing on tall perches and yelling their feelings at all hours of the day and night. They have no sense.

Test Butcher to convert the animal to 1d2 portions of meat and bone (and 1 portion of feathers).

#### Sheep

A sheep can be shorn for wool once per respite, granting 1d6 supplies for Weaver tests.

Test Butcher to convert the animal to 2d6 portions of meat and bone, and one hide.

### Armor

<GearTable title="Armor">
  <GearTable.Item name="Chain armor" cost="3" slots="worn/torso 1" avail=""/>
  <GearTable.Item name="Helmet" cost="2" slots="worn/head" avail=""/>
  <GearTable.Item name="Leather armor" cost="2" slots="worn/torso 1" avail=""/>
  <GearTable.Item name="Plate armor" cost="4" slots="worn/torso 2" avail=""/>
</GearTable>

### Bulk Goods

Bulk goods are useful for feeding many people and animals on long journeys and for outfitting your base camp with ample supplies so your crew doesn’t have to make the arduous trip back to town.

Some bulk goods list a random amount rather than set portions. Such are the perils of shopping at the markets. Sometimes you get a deal, sometimes you get swindled. Roll for the random amount after purchase. The market does not accept complaints or returns.

<GearTable title="Bulk Goods">
  <GearTable.Item name="Barrel of beer" cost="4" slots="carried 4 or pack 8, eight draughts" avail="1" />
  <GearTable.Item name="Barrel of torches" cost="3" slots="carried 4 or pack 8, 6d6 torches" avail="1" />
  <GearTable.Item name="Box of spikes" cost="3" slots="pack 4, 5d6 spikes" avail="1" />
  <GearTable.Item name="Cask of wine" cost="3" slots="carried 2 or pack 4, 4 draughts" avail="1" />
  <GearTable.Item name="Fodder" cost="2" slots="carried 4 or pack 8" avail="0" />
  <GearTable.Item name="Jug of wine" cost="3" slots="carried 1 or pack 3, 3 draughts" avail="1" />
  <GearTable.Item name="Leg of mutton" cost="2" slots="carried 2 or pack 4, 2d6 portions" avail="0" />
  <GearTable.Item name="Pickled herring" cost="2" slots="pack 4, 1d6+1 portions" avail="0" />
  <GearTable.Item name="Sack of dry beans" cost="2" slots="carried 1 or pack 2, 2d6 supplies" avail="0" />
  <GearTable.Item name="Sack of flour" cost="2" slots="carried 2 or pack 6, 3d6 supplies" avail="0" />
  <GearTable.Item name="Salt block" cost="2" slots="pack 1, 2d6 cooking supplies" avail="0" />
  <GearTable.Item name="Side of beef" cost="3" slots="carried 4 or pack 8, 4d6 portions" avail="0" />
  <GearTable.Item name="Spool of rope" cost="4" slots="pack 8, 2d3 lengths" avail="1" />
  <GearTable.Item name="Tun of wine" cost="5" slots="pack 16, 16 draughts" avail="1" />
  <GearTable.Item name="Wheel of cheese" cost="3" slots="pack 3, 2d6 portions" avail="0" />
</GearTable>

#### Barrel of Beer

Eight draughts of beer in a barrel.

#### Barrel of Torches

6d6 torches in a barrel.

#### Box of Spikes

5d6 iron spikes to a box.

#### Cask of Wine

Four draughts of wine in a cask.

#### Fodder

3d6 portions of fodder for animals. Fodder consists of grasses, legumes like alfalfa and clover and herbaceous plants, cut and dried to provide nourishment for animals, especially through the winter when they can’t graze.

#### Jug of Wine

Three draughts of wine in a jug.

#### Leg of Mutton

2d6 portions of raw meat and bone.

#### Pickled Herring

Yum. 1d6+1 portions of preserved rations in a cask.

#### Sack of Dry Beans

Dry beans are used as supplies for Cook tests. This small sack contains 2d6 portions of dried beans. Dry beans cannot be eaten directly. You’ll break your teeth!

#### Sack of Flour

Flour is used as supplies for Cook tests. This large sack contains 3d6 portions of flour. Flour cannot be eaten directly.

#### Salt Block

Salt is a precious mineral used to preserve food. This block can be broken down into 2d6 supplies for cooking tests when preserving or seasoning food.

#### Side of Beef

4d6 portions of raw meat and bone.

#### Spool of Rope

2d3 lengths of rope on a spool.

#### Tun of Wine

16 draughts of wine in a tun.

#### Wheel of Cheese

2d6 portions of preserved rations and cooking supplies.

### Clothing

Your character wears an outfit of your choosing. Basic clothing uses no inventory slots.

You return from adventures filthy and ragged, but maintaining basic clothing and raiment is considered part of your lifestyle cost.

Clothing provides conditional benefits to occasional tests. These bonuses won’t come up very often, but when they do, they’ll be much appreciated.

<GearTable title="Clothing">
  <GearTable.Item name="Belt" cost="1" slots="worn/special (holds three pack 1 items)" avail="1"/>
  <GearTable.Item name="Boots" cost="2" slots="worn/feet" avail="1" />
  <GearTable.Item name="Cloak" cost="2" slots="worn/torso 1, carried 1, pack 2" avail="1"/>
  <GearTable.Item name="Clothes" cost="2" slots="-" avail="1" />
  <GearTable.Item name="Finery" cost="4" slots="worn/torso 3 or pack 4" avail="2"/>
  <GearTable.Item name="Hat" cost="1" slots="worn/head" avail="1" />
  <GearTable.Item name="Leather gloves" cost="2" slots="worn/hands 2 or pack 1" avail="1" />
  <GearTable.Item name="Scarf" cost="2" slots="worn/neck" avail="1" />
  <GearTable.Item name="Shoes" cost="1" slots="worn/feet" avail="1"/>
  <GearTable.Item name="Stylish hat" cost="3" slots="worn/head" avail="2" />
  <GearTable.Item name="Wool sweater" cost="2" slots="worn/torso 1" avail="1" />
</GearTable>

#### Belt

A belt is standard gear for all adventurers, but should one wear out, get stolen or be lost in a life-saving procedure, replacements are available.

Belts have three slots for pack 1 items, but they cannot be used to carry bundled items like torches, candles, spikes, etc.

#### Boots

When traveling, boots grant +1D to tests resulting from rain or rough roads.

#### Cloak

A cloak grants +1D to Survivalist or Health tests related to staying warm or keeping dry, including recovery tests.

#### Clothes

Adventurers begin their career clothed, but the rigors of the road are such that on occasion one needs a new pair of pants. Clothes do not have any inventory requirement as adventurers wear them under their equipment (hopefully).

#### Finery

Fine clothes are required for dealing with nobility or guild masters in town. Unsoiled finery grants its wearer +1 Precedence.

#### Hat

A hat grants +1D to tests for resisting the effects of sun and rain.

#### Leather Gloves

Thick leather gloves grant +1D to tests to resist heat or injury from work, as well as +1D to Laborer tests. However, they impose a +1 Ob factor for actions like spell casting, shooting, carving, etc.

#### Scarf

A scarf grants +1D to tests for resisting or recovering from the effects of cold and draft.

#### Shoes

Shoes are great for walking across gravel and glass.

#### Stylish Hat

Stylish hats provide +1D to Orator, Persuader and Manipulator.

#### Wool Sweater

A wool sweater grants +1D for resisting the effects of cold and wet. This bonus stacks with hats and scarves. Get toasty.

### Containers

Sometimes it feels like life is only about carting around stuff to carry your stuff. There has to be more to it than this.

<GearTable title="Containers">
  <GearTable.Item name="Backpack" cost="2" slots="worn/torso 2" avail="1"/>
  <GearTable.Item name="Barrel" cost="3" slots="carried 4 or pack 8" avail="1" />
  <GearTable.Item name="Bottle" cost="1" slots="carried 1, pack 2 (holds two draughts)" avail="1"/>
  <GearTable.Item name="Cask" cost="2" slots="carried 2 or pack 4" avail="1" />
  <GearTable.Item name="Chest" cost="2" slots="carried 3 or pack 10" avail="1" />
  <GearTable.Item name="Chest, small" cost="2" slots="carried 2 or pack 5" avail="1" />
  <GearTable.Item name="Clay pot" cost="1" slots="pack 1" avail="1" />
  <GearTable.Item name="Frame pack" cost="2" slots="worn/torso 3" avail="1" />
  <GearTable.Item name="Jug" cost="1" slots="carried 1, pack 3 (holds three draughts)" avail="1"/>
  <GearTable.Item name="Pouch, belt" cost="1" slots="belt 1 or pack 1 (holds one pack 1 item)" avail="1"/>
  <GearTable.Item name="Purse" cost="2" slots="worn/torso 1" avail="1" />
  <GearTable.Item name="Quiver" cost="2" slots="worn/torso 1 or belt 2" avail="1"/>
  <GearTable.Item name="Sack, large" cost="1" slots="carried 2 or pack 1" avail="0"/>
  <GearTable.Item name="Sack, small" cost="1" slots="carried 1 or pack 1, for two small sacks" avail="0"/>
  <GearTable.Item name="Satchel" cost="1" slots="worn/torso 1" avail="0"/>
  <GearTable.Item name="Sea chest" cost="4" slots="pack 8" avail="1" />
  <GearTable.Item name="Tun" cost="4" slots="pack 16" avail="1" />
  <GearTable.Item name="Waterskin/wineskin" cost="1" slots="belt 1 or pack 1 (holds one draught)" avail="0"/>
  <GearTable.Item name="Wooden canteen" cost="2" slots="belt 1 or pack 2" avail="1" />
</GearTable>

#### Backpack

A backpack contains six slots. Wearing a backpack counts as a factor in Fighter and Dungeoneer tests.

#### Barrel

A barrel holds eight draughts of liquid or six slots of dry weight.

#### Bottle

A bottle holds two draughts of water or wine.

#### Cask

A cask holds four draughts of liquid or three slots of dry weight.

#### Chest

A chest is a sturdy box with a hinged lid and a lock. It holds eight slots of inventory.

#### Chest, small

A small chest is a smaller version of a chest. Brilliant, eh? It holds four slots of inventory.

#### Clay Pots

A clay pot holds one draught of liquid.

#### Frame Pack

This massive array holds eight slots of inventory, but note that it requires an additional worn/torso slot.

#### Jug

A jug holds three draughts of water or wine.

#### Pouch, belt

A pouch contains one slot for pack items. It can be worn on the belt or tossed in your pack.

#### Purse

Hang your purse from your belt or hide it in your concealed pocket. A purse holds two slots of coins, gems and jewelry.

#### Quiver

A quiver holds your bow along with your arrows. Quivers can also hold bolts, but not a crossbow.

#### Sack, large

A large sack contains six inventory slots but requires two hands to carry. If empty, it takes up one slot in your pack or hand.

#### Sack, small

A small sack contains two inventory slots. Small sacks come in pairs and two sacks can be packed into one slot.

Don’t be confused by the inventory sheet. You don’t get free sacks. You must pack them empty in your pack and then carry them home full. If you don’t pack them, you don’t have them.

#### Satchel

A satchel contains three inventory slots and is worn over the shoulder. Wearing two satchels is the equivalent of wearing a backpack and imposes the same penalties.

#### Sea Chest

A sea chest holds six slots of inventory. It also acts as a seat for rowing on faerings, knarrs, skeids and other boats.

#### Tun

Wine merchants prefer to sell the precious liquid by the tun. These massive containers hold 16 draughts of liquid or 12 slots of dry weight.

#### Waterskin /wineskin

Your waterskin holds one draught of water or wine.

#### Wooden Canteen

This brilliant invention hails from a faraway land where water is more precious than gold. A wooden canteen carries two draughts of liquid.

### Equipment

<GearTable title="Equipment">
  <GearTable.Item name="Flasks of oil" cost="2" slots="carried 1 or pack 1, two flasks" avail=""/>
  <GearTable.Item name="Garlic" cost="1" slots="hand/carried 1, worn/neck 1, or pack 1" avail=""/>
  <GearTable.Item name="Grappling hook" cost="3" slots="carried 1, belt 1, or pack 2" avail=""/>
  <GearTable.Item name="Hammer" cost="2" slots="carried 1 or pack 1" avail=""/>
  <GearTable.Item name="Iron spikes" cost="1" slots="pack 1 for six spikes" avail=""/>
  <GearTable.Item name="Mirror" cost="4" slots="carried 1 or pack 1" avail=""/>
  <GearTable.Item name="Pole, 10 foot" cost="1" slots="carried 2" avail=""/>
  <GearTable.Item name="Rope" cost="2" slots="worn/torso 1 or pack 2" avail=""/>
  <GearTable.Item name="Thieves' tools" cost="4" slots="pack 1" avail=""/>
  <GearTable.Item name="Tinderbox" cost="1" slots="pack 1" avail=""/>
</GearTable>

#### Flasks of oil

Lanterns use flasks of oil as fuel. Cost and inventory is for two flasks of oil. A flask of oil will fuel a lantern for three turns. See the Lantern entry.

#### Garlic

Garlic acts as supplies for cooking.

#### Grappling hook

A grappling hook (when used with rope) grants +1D to Dungeoneer tests involving climbing.

#### Hammer

A hammer is used to drive iron spikes into hard surfaces, among other uses.

#### Iron spikes

Iron spikes grant +1D to tests involving wedging doors open or closed, climbing, anchoring ropes or prying things loose. Cost and inventory is for six spikes. When used, roll 1d6-1 for the number of spikes lost, bent, broken or stuck in the process.

#### Mirror

A mirror is useful for reflecting, signaling or even peeking around a corner. It also grants +1s to successful Maneuver actions in a conflict against a monster with a gaze weapon.

#### Pole, 10’

A pole can be used as gear for detecting traps, climbing, measuring distances or rigging sails or tents. It can be used as supplies for building shelter.

#### Rope

Rope comes in 50-foot coils. It is incredibly useful and can be used in situations involving climbing, linking your group together for a hike in the fog, tying down unruly captives and even starting fires.

#### Thieves’ tools

Thieves’ tools grant +1D to Criminal tests to pick locks and to Sapper tests to disarm traps.

#### Tinderbox

A tinderbox allows your character to light a fire without making a test under normal conditions. It also grants +1D to Survivalist tests to start a fire in bad conditions.

### Food

<GearTable title="Food">
  <GearTable.Item name="Rations, fresh" cost="1" slots="pack 1, two portions" avail=""/>
  <GearTable.Item name="Rations, preserved" cost="2" slots="pack 2, two portions" avail=""/>
  <GearTable.Item name="Water" cost="0" slots="skin/bottle/jug 1" avail=""/>
  <GearTable.Item name="Wine" cost="1" slots="skin/bottle/jug 1" avail=""/>
</GearTable>

#### Rations, fresh

Fresh rations are good eatin’. Cost and inventory is for enough food for two meals. A portion of fresh rations can also easily be stretched by a cook to provide meals for the whole crew.

#### Rations, preserved

Pickled, salted, brined, dried or smoked, preserved rations can be an acquired taste. Cost and inventory is for enough food for three meals.

#### Water

One draught of water alleviates the hungry and thirsty condition. Requires a container like a skin, bottle or jug.

#### Wine

When drunk, one draught of wine either eliminates the hungry and thirsty condition or grants +1D to recover from angry or afraid. Requires a container like a skin, bottle or jug.

### Light sources

<GearTable title="Light Sources">
  <GearTable.Item name="Candles" cost="1" slots="carried 1 or pack 1, four candles" avail=""/>
  <GearTable.Item name="Lantern" cost="3" slots="carried 1 or pack 2" avail=""/>
  <GearTable.Item name="Torches" cost="2" slots="carried 1 or pack 1, four torches" avail=""/>
</GearTable>

#### Candles

A candle provides light for one character for four turns. Cost and inventory is for four candles.

#### Lantern

A lantern provides light for three characters for three turns. Lanterns require oil for fuel. The oil must be acquired or purchased separately. See the entry for flasks of oil.

#### Torches

A torch provides light for two characters for two turns. Cost and inventory is for four torches. In a pinch, a torch can also be used as a weapon.

### Magical and religious equipment

<GearTable title="Magical and Religious Equipment">
  <GearTable.Item name="Holy water flasks" cost="3" slots="carried 1 or pack 1, three flasks" avail=""/>
  <GearTable.Item name="Sacramentals" cost="1+" slots="worn/hand, worn/neck, or pack 1" avail=""/>
  <GearTable.Item name="Spell book" cost="4" slots="pack 2" avail=""/>
  <GearTable.Item name="Spell materials" cost="1+" slots="worn/hand, worn/neck, or pack 1" avail=""/>
  <GearTable.Item name="Stakes and mallet" cost="2" slots="pack 1, three stakes and a mallet" avail=""/>
  <GearTable.Item name="Wolfsbane" cost="2" slots="pack 1" avail=""/>
  <GearTable.Item name="Writing kit" cost="3" slots="-" avail=""/>
</GearTable>

#### Holy water

Holy water can be used as a weapon against the undead—it grants +1s to Attack and Feint actions in kill, capture and drive off conflicts. Each Attack or Feint consumes one vial. Cost and inventory is for three carefully packed vials of holy water.

#### Sacramentals

Each invocation requires specific sacramentals. Proper sacramentals grant +1D to perform that particular invocation. They are expended when used and must be bought per invocation. Cost is equivalent to the circle of the invocation.

#### Spell book

A spell book contains five folios for spells. Spells require a number of folios equal to their circle. Spell books allow magicians to memorize a limited selection of spells while on the road.

#### Spell materials

Spell casting can be augmented with materials. Each spell has specific materials which grant +1D to cast that particular spell. They are expended when used. Cost is equivalent to the circle of the spell.

#### Stakes and mallet

This curious set of implements is sold in shops otherwise known for selling religious curios. Made from linden heartwood, they are said to possess the power to slay the undead. Cost and inventory is for three stakes and the mallet.

If you manage to capture or surprise a vampire or wight at rest, you may use the stakes and mallet in a Ritualist test to attempt to slay the foul creature. Make the test versus its Nature.

#### Wolfsbane

A sprig of wolfsbane grants +1D to tests involving driving off lycanthropes. It must be inflicted on the offending creature somehow, as it does not provide passive protection.

#### Writing kit

Characters who begin with the Scholar skill possess a writing kit as part of their overall gear. Blank scrolls are considered part of your Scholar skill equipment and don’t have to be purchased separately. This entry exists should you lose that kit and need to repurchase it. Written scrolls are pack 1.

### Weapons

<GearTable title="Weapons">
  <GearTable.Item name="Battle axe" cost="3" slots="carried 1, wielded 2" avail=""/>
  <GearTable.Item name="Bow" cost="3" slots="quiver 1, carried 1, wielded 2" avail=""/>
  <GearTable.Item name="Crossbow" cost="4" slots="carried 2, belt 1, wielded 2" avail=""/>
  <GearTable.Item name="Dagger" cost="1" slots="carried 1, belt 1, wielded 1" avail=""/>
  <GearTable.Item name="Flail" cost="2" slots="carried 1, wielded 1" avail=""/>
  <GearTable.Item name="Great sword" cost="3" slots="carried 1, wielded 2" avail=""/>
  <GearTable.Item name="Halberd" cost="3" slots="carried 1, wielded 2" avail=""/>
  <GearTable.Item name="Hand axe" cost="1" slots="belt 1, pack 2, carried 1, wielded 1" avail=""/>
  <GearTable.Item name="Mace" cost="2" slots="carried 1, belt 1, wielded 1" avail=""/>
  <GearTable.Item name="Polearm" cost="3" slots="carried 1, wielded 2" avail=""/>
  <GearTable.Item name="Shield" cost="1" slots="carried 1, worn/torso 1, wielded 1" avail=""/>
  <GearTable.Item name="Sling" cost="1" slots="pouch 1, wielded 1" avail=""/>
  <GearTable.Item name="Spear" cost="1" slots="carried 1, wielded 1" avail=""/>
  <GearTable.Item name="Staff" cost="1" slots="carried 1, wielded 1" avail=""/>
  <GearTable.Item name="Sword" cost="3" slots="carried 1, belt 1, wielded 1" avail=""/>
  <GearTable.Item name="Warhammer" cost="3" slots="carried 1, wielded 2" avail=""/>
</GearTable>


