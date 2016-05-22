		<?php
		
			if($_POST['submit'] == " ")
			{
				
				$errorMessage = "";
				
				if(empty($_POST['message']))
				{
					$errorMessage .= "<li>You forgot to enter a message!</li>";
				}
				if(empty($_POST['username']))
				{
					$errorMessage .= "<li>You forgot to enter a title!</li>";
				}
				
				$varLink = $_POST['videoLink'];
				$varTags = $_POST['tags'];
				$varMessage = $_POST['message'];
				$varTitle = $_POST['username'];
				
				$template = '<article id="video" class="item journal '. $varTags .'"><h3>' . $varTitle .'</h3><div class="itemVid" class="image-link caption" title><iframe width="100%" height="100%" src='. '"' . $varLink . '" ' . 'frameborder="0" allowfullscreen></iframe></div><p>' . $varMessage . '</p><hr/><div class="launch-dock"><a class="button journalButton" href=' . '"' . $varLink . '" ' . 'target="_blank">Source</a></div><footer><time datetime=' . date("Y-m-d") . '>' . date("Y-m-d") . '</time></footer></article>';

				if(!empty($errorMessage))
				{
					echo("<p>There was an error with your form:</p>\n");
					echo("<ul>" . $errorMessage . "</ul>\n");
				}
				
				if($errorMessage != "")
				{
					echo("<p>There was an error:</p>\n");
					echo("<ul>" . $errorMessage . "</ul>\n");
				}
				else
				{
					$fs = fopen("mydata.html","a");
					fwrite($fs,$template . "\n");
					fclose($fs);
					
				}
			}
		?>

		<script>
			window.location="journal.html#video";
		</script>
