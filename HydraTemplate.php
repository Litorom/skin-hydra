<?php
/**
 * Hydra - Minor override for Vector to include advertisements and branding tweaks.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA.
 * http://www.gnu.org/copyleft/gpl.html
 *
 * @file
 * @ingroup Skins
 */

/**
 * QuickTemplate class for Hydra skin
 *
 * @ingroup Skins
 */
class HydraTemplate extends VectorTemplate {
	/* Functions */
	/**
	 * Outputs the entire contents of the (X)HTML page
	 */
	public function execute() {
		$this->data['namespace_urls'] = $this->data['content_navigation']['namespaces'];
		$this->data['sharing_urls'] = (isset($this->data['content_navigation']['sharing']) ? $this->data['content_navigation']['sharing'] : []);
		$this->data['view_urls'] = $this->data['content_navigation']['views'];
		$this->data['action_urls'] = $this->data['content_navigation']['actions'];
		$this->data['variant_urls'] = $this->data['content_navigation']['variants'];

		// Move the watch/unwatch star outside of the collapsed "actions" menu to the main "views" menu
		if ($this->config->get('VectorUseIconWatch')) {
			$mode = $this->getSkin()->getUser()->isWatched($this->getSkin()->getRelevantTitle())
				? 'unwatch'
				: 'watch';

			if (isset($this->data['action_urls'][$mode])) {
				$this->data['view_urls'][$mode] = $this->data['action_urls'][$mode];
				unset($this->data['action_urls'][$mode]);
			}
		}
		$this->data['pageLanguage'] =
			$this->getSkin()->getTitle()->getPageViewLanguage()->getHtmlCode();

		// Output HTML Page
		$this->html('headelement');
		?>
	<div id="global-wrapper"<?php echo ($this->data['showads'] && HydraHooks::showSideRailAPUs($this->getSkin()) && !HydraHooks::isAdLightExperience() && $this->config->get('HydraSkinShowSideRail') ? ' class="with-siderail"' : '') ?>>
		<div id="mw-page-base" class="noprint"></div>
		<div id="mw-head-base" class="noprint"></div>
		<div id="pageWrapper">
			<div id="content" class="mw-body" role="main" itemprop="articleBody">
				<a id="top"></a>
				<?php
				if ($this->data['sitenotice']) {
					echo Html::rawElement(
						'div',
						[
							'id' => 'siteNotice',
							'class' => 'mw-body-content',
						],
						// Raw HTML
						 $this->get('sitenotice')
					);
				}
				if (is_callable([$this, 'getIndicators'])) {
					echo $this->getIndicators();
				} ?>
				<!-- ATF Leaderboard -->
				<?php if ($this->data['showads'] && HydraHooks::getAdBySlot('atflb')) { ?>
				<div id="atflb">
					<?php echo HydraHooks::getAdBySlot('atflb'); ?>
				</div>
				<?php } ?>
				<!-- /ATF Leaderboard -->
				<?php
				// Loose comparison with '!=' is intentional, to catch null and false too, but not '0'
				if ($this->data['title'] != '') {
					echo Html::rawElement(
						'h1',
						[
							'id' => 'firstHeading',
							'class' => 'firstHeading',
							'lang' => $this->get('pageLanguage'),
							'itemprop' => 'name'
						],
						// Raw HTML
						 $this->get('title')
					);
				}

				$this->html('prebodyhtml') ?>
				<div id="bodyContent" class="mw-body-content">
					<?php
					if ($this->data['isarticle']) {
						echo Html::element(
							'div',
							[
								'id' => 'siteSub',
								'class' => 'noprint',
							],
							$this->getMsg('tagline')->text()
						);
					}
					?>
					<div id="contentSub"<?php $this->html('userlangattributes') ?>><?php
						$this->html('subtitle')
					?></div>
					<?php
					if ($this->data['undelete']) {
						echo Html::rawElement(
							'div',
							['id' => 'contentSub2'],
							// Raw HTML
							$this->get('undelete')
						);
					}
					if ($this->data['newtalk']) {
						echo Html::rawElement(
							'div',
							['class' => 'usermessage'],
							// Raw HTML
							$this->get('newtalk')
						);
					}
					?>
					<div id="jump-to-nav" class="mw-jump">
						<?php $this->msg('jumpto') ?>
						<a href="#mw-head"><?php
							$this->msg('jumptonavigation')
						?></a><?php $this->msg('comma-separator') ?>
						<a href="#p-search"><?php $this->msg('jumptosearch') ?></a>
					</div>
					<?php
					$this->html('bodycontent');

					if ($this->data['printfooter']) {
						?>
						<div class="printfooter">
							<?php $this->html('printfooter'); ?>
						</div>
						<?php
					}

					if ($this->data['catlinks']) {
						$this->html('catlinks');
					}

					if ($this->data['dataAfterContent']) {
						$this->html('dataAfterContent');
					}
					?>
					<div class="visualClear"></div>
					<?php $this->html('debughtml'); ?>
				</div>
				<?php
				if ($this->data['showads'] && HydraHooks::showSideRailAPUs($this->getSkin()) && !HydraHooks::isAdLightExperience()) {
					?>
				<div id="siderail<?php echo htmlentities(ResourceLoaderLessVariableModule::getAdIdAppend()); ?>">
					<?php
					/* $$placements['new-item'] = $rawHtml;
					 * Item key should be suitable as an element ID.
					 * NOTE: Do not sort the placements array!  Some extensions will insert their content in a specific order.
					 *
					 * Example:
					 * <div id="new-item">
					 *		<img src='htmlexample.png'/>
					 * </div>
					*/
					$placements = [];
					Hooks::run('SideRailPlacements', [&$placements]);

					// Give extensions a chance to sort the placements correctly.
					Hooks::run('SideRailPlacementsBeforeOutput', [&$placements]);

					if (is_array($placements) && count($placements)) {
						foreach ($placements as $id => $placement) {
							echo "<div id='" . htmlentities($id . ResourceLoaderLessVariableModule::getAdIdAppend()) . "'>" . $placement . "</div>";
						}
					}
					?>
				</div>
				<div class="visualClear"></div>
					<?php
				}

				$placements = [];
				Hooks::run('BottomPlacements', [&$placements, $this]);

				// Give extensions a chance to sort the placements correctly.
				Hooks::run('BottomPlacementsBeforeOutput', [&$placements, $this]);

				if (is_array($placements) && count($placements)) {
					foreach ($placements as $id => $placement) {
						echo "<div id=" . htmlentities($id) . ">" . $placement . "</div>";
					}
				}
				?>
			</div>
			<div id="mw-navigation">
				<h2><?php $this->msg('navigation-heading') ?></h2>
				<div id="mw-head">
					<?php // $this->renderNavigation( 'PERSONAL' ); Remove for Hydra Skin as it is handled in the netbar. ?>
					<div id="left-navigation">
						<?php $this->renderNavigation(['NAMESPACES', 'VARIANTS', 'SHARING']); ?>
					</div>
					<div id="right-navigation">
						<?php $this->renderNavigation(['VIEWS', 'ACTIONS', 'SEARCH']); ?>
					</div>
				</div>
				<div id="mw-panel">
					<div id="p-logo" role="banner"><a class="mw-wiki-logo" href="<?php
						echo htmlspecialchars($this->data['nav_urls']['mainpage']['href'])
					?>" <?php
						global $wgSitename;
						echo 'title="' . wfMessage('tooltip-p-logo')->escaped() . ' - ' . $wgSitename . '"';
?>></a></div>
					<?php $this->renderPortals($this->data['sidebar']); ?>
				</div>
			</div>
			<?php Hooks::run('VectorBeforeFooter'); ?>
			<div id="footer" role="contentinfo"<?php $this->html('userlangattributes') ?>>
				<?php
				foreach ($this->getFooterLinks() as $category => $links) {
					?>
				<ul id="footer-<?php echo $category ?>">
					<?php
					foreach ($links as $link) {
						?>
					<li id="footer-<?php echo $category ?>-<?php echo $link ?>"><?php $this->html($link) ?></li>
						<?php
					}
					?>
				</ul>
					<?php
				}
				?>
				<?php $footericons = $this->getFooterIcons('icononly');
				if (count($footericons) > 0) {
					?>
					<ul id="footer-icons" class="noprint">
						<?php
						foreach ($footericons as $blockName => $footerIcons) {
							?>
						<li id="footer-<?php echo htmlspecialchars($blockName); ?>ico">
							<?php
							foreach ($footerIcons as $icon) {
								echo $this->getSkin()->makeFooterIcon($icon);
							}
							?>
						</li>
							<?php
						}
						?>
					</ul>
					<?php
				}
				?>
				<div style="clear: both;"></div>
			</div>
		</div>
		<div id="footer-push"></div>
	</div>
		<?php $this->printTrail(); ?>

	</body>
</html>
		<?php
	}

	/**
	 * Render one or more navigations elements by name, automatically reveresed
	 * when UI is in RTL mode
	 *
	 * @param array $elements
	 */
	protected function renderNavigation(array $elements) {
		// Render elements
		foreach ($elements as $name => $element) {
			switch ($element) {
				case 'NAMESPACES':
					?>
					<div id="p-namespaces" role="navigation" class="vectorTabs<?php
					if (count($this->data['namespace_urls']) == 0) {
						echo ' emptyPortlet';
					}
					?>" aria-labelledby="p-namespaces-label">
						<h3 id="p-namespaces-label"><?php $this->msg('namespaces') ?></h3>
						<ul<?php $this->html('userlangattributes') ?>>
							<?php
							foreach ($this->data['namespace_urls'] as $key => $item) {
								echo $this->makeListItem($key, $item, [
									'vector-wrap' => true,
								]);
							}
							?>
						</ul>
					</div>
					<?php
					break;
				case 'SHARING':
					?>
					<div id="p-sharing" role="navigation" class="vectorMenu<?php
					if (empty($this->data['sharing_urls']['share'])) {
						echo ' emptyPortlet';
					}
					?>" aria-labelledby="p-sharing-label">
						<input type="checkbox" class="vectorMenuCheckbox" aria-labelledby="p-sharing-label" />
						<h3 id="p-cactions-label"><span><?php
						if (isset($this->data['sharing_urls']['share']['text'])) {
							echo $this->data['sharing_urls']['share']['text'];
						}
						?></span></h3>
						<div class="menu">
							<?php
							if (isset($this->data['sharing_urls']['share']['html'])) {
								echo $this->data['sharing_urls']['share']['html'];
							}
							?>
						</div>
					</div>
					<?php
					break;
				case 'VARIANTS':
					?>
					<div id="p-variants" role="navigation" class="vectorMenu<?php
					if (count($this->data['variant_urls']) == 0) {
						echo ' emptyPortlet';
					}
					?>" aria-labelledby="p-variants-label">
						<?php
						// Replace the label with the name of currently chosen variant, if any
						$variantLabel = $this->getMsg('variants')->text();
						foreach ($this->data['variant_urls'] as $item) {
							if (isset($item['class']) && stripos($item['class'], 'selected') !== false) {
								$variantLabel = $item['text'];
								break;
							}
						}
						?>
						<input type="checkbox" class="vectorMenuCheckbox" aria-labelledby="p-variants-label" />
						<h3 id="p-variants-label">
							<span><?php echo htmlspecialchars($variantLabel) ?></span>
						</h3>
						<div class="menu">
							<ul>
								<?php
								foreach ($this->data['variant_urls'] as $key => $item) {
									echo $this->makeListItem($key, $item);
								}
								?>
							</ul>
						</div>
					</div>
					<?php
					break;
				case 'VIEWS':
					?>
					<div id="p-views" role="navigation" class="vectorTabs<?php
					if (count($this->data['view_urls']) == 0) {
						echo ' emptyPortlet';
					}
					?>" aria-labelledby="p-views-label">
						<h3 id="p-views-label"><?php $this->msg('views') ?></h3>
						<ul<?php $this->html('userlangattributes') ?>>
							<?php
							foreach ($this->data['view_urls'] as $key => $item) {
								echo $this->makeListItem($key, $item, [
									'vector-wrap' => true,
									'vector-collapsible' => true,
								]);
							}
							?>
						</ul>
					</div>
					<?php
					break;
				case 'ACTIONS':
					?>
					<div id="p-cactions" role="navigation" class="vectorMenu<?php
					if (count($this->data['action_urls']) == 0) {
						echo ' emptyPortlet';
					}
					?>" aria-labelledby="p-cactions-label">
						<input type="checkbox" class="vectorMenuCheckbox" aria-labelledby="p-cactions-label" />
						<h3 id="p-cactions-label"><span><?php
							$this->msg('vector-more-actions')
						?></span></h3>
						<div class="menu">
							<ul<?php $this->html('userlangattributes') ?>>
								<?php
								foreach ($this->data['action_urls'] as $key => $item) {
									echo $this->makeListItem($key, $item);
								}
								?>
							</ul>
						</div>
					</div>
					<?php
					break;
				case 'PERSONAL':
					?>
					<div id="p-personal" role="navigation" class="<?php
					if (count($this->data['personal_urls']) == 0) {
						echo ' emptyPortlet';
					}
					?>" aria-labelledby="p-personal-label">
						<h3 id="p-personal-label"><?php $this->msg('personaltools') ?></h3>
						<ul<?php $this->html('userlangattributes') ?>>
							<?php
							$notLoggedIn = '';

							if (!$this->getSkin()->getUser()->isLoggedIn() &&
								User::groupHasPermission('*', 'edit')
							) {
								$notLoggedIn =
									Html::rawElement(
										'li',
										['id' => 'pt-anonuserpage'],
										$this->getMsg('notloggedin')->escaped()
									);
							}

							$personalTools = $this->getPersonalTools();

							$langSelector = '';
							if (array_key_exists('uls', $personalTools)) {
								$langSelector = $this->makeListItem('uls', $personalTools['uls']);
								unset($personalTools['uls']);
							}

							echo $langSelector;
							echo $notLoggedIn;
							foreach ($personalTools as $key => $item) {
								echo $this->makeListItem($key, $item);
							}
							?>
						</ul>
					</div>
					<?php
					break;
				case 'SEARCH':
					?>
					<div id="p-search" role="search">
						<h3<?php $this->html('userlangattributes') ?>>
							<label for="searchInput"><?php $this->msg('search') ?></label>
						</h3>
						<form action="<?php $this->text('wgScript') ?>" id="searchform">
							<div<?php echo $this->config->get('VectorUseSimpleSearch') ? ' id="simpleSearch"' : '' ?>>
								<?php
								echo $this->makeSearchInput(['id' => 'searchInput']);
								echo Html::hidden('title', $this->get('searchtitle'));
								/* We construct two buttons (for 'go' and 'fulltext' search modes),
								 * but only one will be visible and actionable at a time (they are
								 * overlaid on top of each other in CSS).
								 * * Browsers will use the 'fulltext' one by default (as it's the
								 *   first in tree-order), which is desirable when they are unable
								 *   to show search suggestions (either due to being broken or
								 *   having JavaScript turned off).
								 * * The mediawiki.searchSuggest module, after doing tests for the
								 *   broken browsers, removes the 'fulltext' button and handles
								 *   'fulltext' search itself; this will reveal the 'go' button and
								 *   cause it to be used.
								 */
								echo $this->makeSearchButton(
									'fulltext',
									['id' => 'mw-searchButton', 'class' => 'searchButton mw-fallbackSearchButton']
								);
								echo $this->makeSearchButton(
									'go',
									['id' => 'searchButton', 'class' => 'searchButton']
								);
								?>
							</div>
						</form>
					</div>
					<?php

					break;
			}
		}
	}
}
